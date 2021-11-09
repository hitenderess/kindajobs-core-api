import { Test, TestingModule } from '@nestjs/testing';
import { UserContractPaymentsController } from './user-contract-payments.controller';

describe('UserContractPaymentsController', () => {
  let controller: UserContractPaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserContractPaymentsController],
    }).compile();

    controller = module.get<UserContractPaymentsController>(UserContractPaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
