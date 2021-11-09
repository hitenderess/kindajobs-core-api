import { Test, TestingModule } from '@nestjs/testing';
import { UserContractFeedbackService } from './user-contract-feedback.service';

describe('UserContractFeedbackService', () => {
  let service: UserContractFeedbackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserContractFeedbackService],
    }).compile();

    service = module.get<UserContractFeedbackService>(UserContractFeedbackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
