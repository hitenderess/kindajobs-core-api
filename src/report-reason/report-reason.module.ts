import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportReasonController } from './report-reason.controller';
import { ReportReason } from './report-reason.entity';
import { ReportReasonService } from './report-reason.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReportReason])],
  controllers: [ReportReasonController],
  providers: [ReportReasonService]
})
export class ReportReasonModule {}
