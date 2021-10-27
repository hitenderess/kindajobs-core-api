import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CommandHandlers } from './commands/handlers'

@Module({
  controllers: [AuthController],
  providers: [AuthService, ...CommandHandlers]
})
export class AuthModule {}
