import { Test, TestingModule } from '@nestjs/testing';
import { UserContractPaymentsService } from './user-contract-payments.service';

describe('UserContractPaymentsService', () => {
  let service: UserContractPaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserContractPaymentsService],
    }).compile();

    service = module.get<UserContractPaymentsService>(UserContractPaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
