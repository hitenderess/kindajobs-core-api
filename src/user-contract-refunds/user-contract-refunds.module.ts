import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserContractRefundsController } from './user-contract-refunds.controller';
import { UserContractsRefunds } from './user-contract-refunds.entity';
import { UserContractRefundsService } from './user-contract-refunds.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserContractsRefunds])],
  controllers: [UserContractRefundsController],
  providers: [UserContractRefundsService]
})
export class UserContractRefundsModule {}
