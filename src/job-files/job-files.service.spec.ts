import { Test, TestingModule } from '@nestjs/testing';
import { JobFilesService } from './job-files.service';

describe('JobFilesService', () => {
  let service: JobFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobFilesService],
    }).compile();

    service = module.get<JobFilesService>(JobFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
