import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFeedbackController } from './user-feedback.controller';
import { UserFeedbacks } from './user-feedback.entity';
import { UserFeedbackService } from './user-feedback.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserFeedbacks])
  ],
  controllers: [UserFeedbackController],
  providers: [UserFeedbackService]
})
export class UserFeedbackModule {}
