import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserNotificationsController } from './user-notifications.controller';
import { UserNotifications } from './user-notifications.entity';
import { UserNotificationsService } from './user-notifications.service';
@Module({
  imports:[
    TypeOrmModule.forFeature([UserNotifications])
  ],
  controllers: [UserNotificationsController],
  providers: [UserNotificationsService]
})
export class UserNotificationsModule {}
