import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserContractPaymentsController } from './user-contract-payments.controller';
import { UserContractsPayments } from './user-contract-payments.entity';
import { UserContractPaymentsService } from './user-contract-payments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserContractsPayments])
  ],
  controllers: [UserContractPaymentsController],
  providers: [UserContractPaymentsService]
})
export class UserContractPaymentsModule {}
