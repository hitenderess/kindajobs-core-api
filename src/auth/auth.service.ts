import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { getCustomRepository } from "typeorm";
import { RequestOtpTokenCommand } from "./commands/request-otp-token.command";
import { PhoneVerificationRepository } from './repository/phone-verification.repository';
import { OtpTokenNotRecognized } from "@shared/errors"
import * as moment from 'moment';
import { JwtService } from '@nestjs/jwt';
import { UserService } from "user/user.service";
import { User } from "user/user.entity";
import { AppConfigService } from "@shared/config/app-config.service";
import { AccessTokenPayload } from "./interfaces/auth.interface";
import { UserType } from "@shared/enums";
import { RequestOtp, Signup } from "./auth.dto";
import { OtpOver } from "@shared/enums/auth";
import { EmailService } from "email/email.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
        private readonly appConfig: AppConfigService,
        private readonly emailService: EmailService
    ){}
    
    requestOtpToken(input: RequestOtp) {
        if (input.over === OtpOver.Phone) {
            return this.commandBus.execute(new RequestOtpTokenCommand(input.resource))
        }
        return this.emailService.sendEmailVerificationOtp(input.resource, 123456);
    }

    async verifyOtpToken(phoneNumber: string, otp: number) {
        const phoneVerificationRepository = getCustomRepository(PhoneVerificationRepository);
        const extantOtpToken = await phoneVerificationRepository.getValidOtpToken(phoneNumber, otp);
    
        if (!extantOtpToken || !extantOtpToken.isBeforeExpiry(moment.utc().toDate())) {
            throw new OtpTokenNotRecognized();
        }

        let user = await this.userService.findByPhoneNumber(extantOtpToken.phoneNumber);
        return await this.buildAccessToken(user);
    }

    async buildAccessToken(user: User): Promise<AccessTokenPayload> {
        const payload =  {
            sub: user.id,
            aud: user.type.toLowerCase(),
            phoneNumber: user.phoneNumber,
        }
        const jwtToken = await this.jwtService.signAsync(payload , { expiresIn: this.appConfig.authOptions.jwtTokenExpirationTime });
        return { ...payload, token: jwtToken }
    }

    async signupUser(input: Signup) {
        const user = await this.userService.createOne(input);
        return this.buildAccessToken(user);
    }
}