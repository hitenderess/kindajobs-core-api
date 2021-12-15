import { Test, TestingModule } from '@nestjs/testing';
import { JobReportReasonController } from './job-report-reason.controller';

describe('JobReportReasonController', () => {
  let controller: JobReportReasonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobReportReasonController],
    }).compile();

    controller = module.get<JobReportReasonController>(JobReportReasonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
