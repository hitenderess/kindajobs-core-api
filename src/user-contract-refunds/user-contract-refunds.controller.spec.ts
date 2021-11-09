import { Test, TestingModule } from '@nestjs/testing';
import { UserContractRefundsController } from './user-contract-refunds.controller';

describe('UserContractRefundsController', () => {
  let controller: UserContractRefundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserContractRefundsController],
    }).compile();

    controller = module.get<UserContractRefundsController>(UserContractRefundsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
