import { Test, TestingModule } from '@nestjs/testing';
import { JobRequiredSkillsService } from './job-required-skills.service';

describe('JobRequiredSkillsService', () => {
  let service: JobRequiredSkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobRequiredSkillsService],
    }).compile();

    service = module.get<JobRequiredSkillsService>(JobRequiredSkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
