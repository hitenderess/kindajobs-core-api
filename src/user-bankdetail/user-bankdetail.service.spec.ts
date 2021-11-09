import { Test, TestingModule } from '@nestjs/testing';
import { UserBankdetailService } from './user-bankdetail.service';

describe('UserBankdetailService', () => {
  let service: UserBankdetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserBankdetailService],
    }).compile();

    service = module.get<UserBankdetailService>(UserBankdetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
