import { Injectable } from "@nestjs/common";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";
import { AppConfigService } from "@shared/config/app-config.service";

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
    constructor(
        private readonly configService: AppConfigService
    ) {}
    createJwtOptions(): JwtModuleOptions {
      return {
        secret: this.configService.authOptions.jwtSecretKey,
        signOptions: {
          expiresIn: this.configService.authOptions.jwtTokenExpirationTime,
        },
      };
    }
  }