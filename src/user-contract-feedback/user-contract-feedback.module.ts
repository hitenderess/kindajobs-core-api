import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserContractFeedbackController } from './user-contract-feedback.controller';
import { UserContractFeedbackService } from './user-contract-feedback.service';
import { UserContractsFeedback } from './user-contract-payments.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserContractsFeedback])
  ],
  controllers: [UserContractFeedbackController],
  providers: [UserContractFeedbackService]
})
export class UserContractFeedbackModule {}
