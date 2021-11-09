import { Test, TestingModule } from '@nestjs/testing';
import { JobRequiredSkillsController } from './job-required-skills.controller';

describe('JobRequiredSkillsController', () => {
  let controller: JobRequiredSkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobRequiredSkillsController],
    }).compile();

    controller = module.get<JobRequiredSkillsController>(JobRequiredSkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
