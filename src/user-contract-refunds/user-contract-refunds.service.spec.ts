import { Test, TestingModule } from '@nestjs/testing';
import { UserContractRefundsService } from './user-contract-refunds.service';

describe('UserContractRefundsService', () => {
  let service: UserContractRefundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserContractRefundsService],
    }).compile();

    service = module.get<UserContractRefundsService>(UserContractRefundsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
