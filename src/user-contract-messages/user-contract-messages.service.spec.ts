import { Test, TestingModule } from '@nestjs/testing';
import { UserContractMessagesService } from './user-contract-messages.service';

describe('UserContractMessagesService', () => {
  let service: UserContractMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserContractMessagesService],
    }).compile();

    service = module.get<UserContractMessagesService>(UserContractMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
