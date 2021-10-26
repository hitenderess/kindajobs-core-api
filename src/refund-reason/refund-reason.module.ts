import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefundReasonController } from './refund-reason.controller';
import { RefundReason } from './refund-reason.entity';
import { RefundReasonService } from './refund-reason.service';

@Module({
  imports: [TypeOrmModule.forFeature([RefundReason])],
  controllers: [RefundReasonController],
  providers: [RefundReasonService]
})
export class RefundReasonModule {}
