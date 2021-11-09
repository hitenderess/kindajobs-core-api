import { Test, TestingModule } from '@nestjs/testing';
import { JobRequiredToolsController } from './job-required-tools.controller';

describe('JobRequiredToolsController', () => {
  let controller: JobRequiredToolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobRequiredToolsController],
    }).compile();

    controller = module.get<JobRequiredToolsController>(JobRequiredToolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
