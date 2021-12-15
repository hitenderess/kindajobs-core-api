import { Test, TestingModule } from '@nestjs/testing';
import { JobReportReasonService } from './job-report-reason.service';

describe('JobReportReasonService', () => {
  let service: JobReportReasonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobReportReasonService],
    }).compile();

    service = module.get<JobReportReasonService>(JobReportReasonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
