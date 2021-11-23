import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigService } from '@shared/config/app-config.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands/handlers'
import { PhoneVerification } from './entities/phone-verification.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'user/user.module';
import { JwtConfigService } from './services/jwt.service';
import { AppConfigModule } from '@shared/config/app-config.module';

@Module({
  imports: [
    CqrsModule,
    ConfigModule,
    UserModule,
    TypeOrmModule.forFeature([PhoneVerification]),
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      useClass: JwtConfigService
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AppConfigService, ...CommandHandlers]
})
export class AuthModule { }
