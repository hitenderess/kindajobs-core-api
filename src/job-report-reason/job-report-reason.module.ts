import { Module } from '@nestjs/common';
import { JobReportReasonController } from './job-report-reason.controller';
import { JobReportReasonService } from './job-report-reason.service';

@Module({
  controllers: [JobReportReasonController],
  providers: [JobReportReasonService]
})
export class JobReportReasonModule {}
