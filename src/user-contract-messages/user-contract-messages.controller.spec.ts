import { Test, TestingModule } from '@nestjs/testing';
import { UserContractMessagesController } from './user-contract-messages.controller';

describe('UserContractMessagesController', () => {
  let controller: UserContractMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserContractMessagesController],
    }).compile();

    controller = module.get<UserContractMessagesController>(UserContractMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
