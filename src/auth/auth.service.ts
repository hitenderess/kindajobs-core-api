import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppConfigService } from '../shared/config';
import {
    InvalidCredentials,
    BadRequestError,
} from '../shared/errors';
import { PasswordCiper, VerificationTokenGenerator } from '../shared/utils';
import { ms } from '../shared/utils/ms';
import { AccessToken,  LoginCredentialDto } from './auth.dto';
import { UserLogin } from './auth.entity';
import { AccessTokenPayload } from './auth.interface';
import { UserType } from '../shared/enums';
import { UserService } from 'src/user/user.service';
import { LatLngDto } from './lat-lng.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserLogin) public repository: Repository<UserLogin>,
        private readonly jwtService: JwtService,
        private readonly passwordCipher: PasswordCiper,
        private readonly verificationTokenGenerator: VerificationTokenGenerator,
        private readonly configService: AppConfigService,
        private readonly eventBus: EventBus,
        private readonly UserService: UserService 
    ) {}

    async login(userType: UserType, credential: LoginCredentialDto) {
        const userLogin = await this.validateUserLogin(userType, credential.username, credential.password);
        const accessToken = this.createAccessToken(userLogin);

        await this.updateLoginStatus(userLogin, true);
        return accessToken;
    }

    async updateLoginStatus(userLogin: UserLogin, isLogin: boolean) {
        return await this.repository.save({
            ...userLogin,
            isLogin,
        });
    }
    
    async logout(userId: string, userType: UserType, input: LatLngDto) {
        const userLogin = await this.repository.findOne({ userId, userType });
        if (!userLogin) {
            throw new BadRequestError();
        }

        await this.updateLoginStatus(userLogin, false);
    }

    async validateUserLogin(userType: UserType, username: string, password: string): Promise<UserLogin> {
        const userLogin = await this.findByUsernames(userType, username);

        if (!userLogin) {
            throw new InvalidCredentials();
        }

        const checkResult = await this.passwordCipher.check(password, userLogin.passwordHash);

        if (!checkResult) {
            throw new InvalidCredentials();
        }

        delete userLogin.verificationToken;
        delete userLogin.passwordResetToken;
        delete userLogin.passwordHash;
        const { ...result } = userLogin;
        return result;
    }

    async createAccessToken(userLogin: UserLogin) {
        const authorization = { groups: userLogin.groups };
        const payload = await this.buildAccessTokenPayload(userLogin.userType, userLogin.userId, authorization);
        const expiresIn = +ms(`${this.configService.authOptions.jwtTokenExpirationTime}`) / 1000;
        const refreshExpiresIn = +ms(`${this.configService.authOptions.jwtRefreshTokenExpirationTime}`) / 1000;
        const accessToken = await this.jwtService.signAsync({ typ: 'Bearer', ...payload }, { expiresIn });
        const refreshToken = await this.jwtService.signAsync({ typ: 'Refresh', ...payload }, { expiresIn: refreshExpiresIn });
        return new AccessToken(accessToken, expiresIn, refreshToken, refreshExpiresIn);
    }

    private async findByUsernames(userType: UserType, username: string): Promise<UserLogin> {
        return this.repository.findOne({
            where: [
                { userType, username },
                { userType, secondaryUsername: username },
            ],
        });
    }

    private async buildAccessTokenPayload(userType: UserType, userId: string, authorization: any): Promise<AccessTokenPayload> {
        if (userType === UserType.PROVIDER) {
            const serviceProvider = await this.UserService.findOne(userId);
            
            return {
                sub: serviceProvider.id.toString(),
                aud: userType.toLowerCase(),
                username: serviceProvider.mobileNumber,
                name: serviceProvider.profile.first_name,
                authorization,
            };
        }
    }

    async refreshAccessToken(userType: UserType, token: string) {
        const jwtPayload: AccessTokenPayload = await this.jwtService.verifyAsync(token);
        const userLogin = await this.repository.findOne({
            where: {
                userType,
                userId: jwtPayload.sub,
            },
        });

        if (!userLogin) {
            throw new BadRequestError();
        }

        return this.createAccessToken(userLogin);
    }

}