import { Test, TestingModule } from '@nestjs/testing';
import { UserContractFeedbackController } from './user-contract-feedback.controller';

describe('UserContractFeedbackController', () => {
  let controller: UserContractFeedbackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserContractFeedbackController],
    }).compile();

    controller = module.get<UserContractFeedbackController>(UserContractFeedbackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
