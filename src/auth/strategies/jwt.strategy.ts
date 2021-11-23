import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AppConfigService } from '@shared/config/app-config.service';
import { AccessTokenPayload } from '../interfaces/auth.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(configService: AppConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.authOptions.jwtSecretKey,
        });
    }

    async validate(payload: any): Promise<AccessTokenPayload> {
        const { sub, aud, phoneNumber } = payload;
        return { sub, aud, phoneNumber };
    }
}
