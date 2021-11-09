import { Test, TestingModule } from '@nestjs/testing';
import { UserBankdetailController } from './user-bankdetail.controller';

describe('UserBankdetailController', () => {
  let controller: UserBankdetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBankdetailController],
    }).compile();

    controller = module.get<UserBankdetailController>(UserBankdetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
