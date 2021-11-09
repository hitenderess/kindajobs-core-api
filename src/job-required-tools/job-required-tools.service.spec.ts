import { Test, TestingModule } from '@nestjs/testing';
import { JobRequiredToolsService } from './job-required-tools.service';

describe('JobRequiredToolsService', () => {
  let service: JobRequiredToolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobRequiredToolsService],
    }).compile();

    service = module.get<JobRequiredToolsService>(JobRequiredToolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
