import { ConnectionOptions } from "typeorm";
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from "../typeorm/snake-naming-stratergy";
import * as path from "path";
import { Injectable } from "@nestjs/common";
import { DefaultConfiguration } from './default-config';

@Injectable()
export class AppConfigService {

    constructor(private configService: ConfigService) { }

    get dbConnectionOptions(): ConnectionOptions {
        return {
            type: 'postgres',
            host: this.get<string>('DB_HOST'),
            port: this.get<number>('DB_PORT'),
            username: this.get('DB_USERNAME'),
            password: this.get('DB_PASSWORD'),
            database: this.get<string>('DB_DATABASE'),
            entities: [path.join(__dirname + '/../../**/*.entity{.ts,.js}')],
            migrations: [path.join(__dirname + '/../../database/migrations/*{.ts,.js}')],
            logging: this.get<string>('DB_LOGGING') === 'true',
            synchronize: this.get<string>('DB_SYNCHRONIZE') === 'true',
            namingStrategy: new SnakeNamingStrategy(),
        }
    }

    get authOptions() {
        return {
            jwtSecretKey: this.get('JWT_SECRET_KEY'),
            jwtTokenExpirationTime: this.get<number>('JWT_TOKEN_EXPIRATION_TIME'),
            jwtRefreshTokenExpirationTime: this.get<number>('JWT_REFRESH_TOKEN_EXPIRATION_TIME'),
            verificationTokenDuration: DefaultConfiguration.authOptions.verificationTokenDuration,
        }
    }

    get otpTokenExpirationTime(): number {
        return this.get<number>('OTP_EXPIRATION_TIME_IN_SECONDS')
    }

    get otpTokenRequestTime(): number {
        return this.get<number>('OTP_REQUEST_TIME_IN_SECONDS')
    }

    get<T = any>(propertyPath: string, defaultValue?: T): T | undefined {
        return this.configService.get<T>(propertyPath, defaultValue);
    }
}