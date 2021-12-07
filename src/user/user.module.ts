import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from 'user-profile/user-profile.entity';
import { UserProfileService } from 'user-profile/user-profile.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UserProfile])
  ],
  controllers: [UserController],
  providers: [UserService, UserProfileService],
  exports: [UserService]
})
export class UserModule {}
