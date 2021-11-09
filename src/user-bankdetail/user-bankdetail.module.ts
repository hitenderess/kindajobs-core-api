import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBankdetailController } from './user-bankdetail.controller';
import { UserBankDetail } from './user-bankdetail.entity';
import { UserBankdetailService } from './user-bankdetail.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserBankDetail])
  ],
  controllers: [UserBankdetailController],
  providers: [UserBankdetailService]
})
export class UserBankdetailModule {}
