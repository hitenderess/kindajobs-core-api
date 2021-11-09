import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserContractsController } from './user-contracts.controller';
import { UserContracts } from './user-contracts.entity';
import { UserContractsService } from './user-contracts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserContracts])
  ],
  controllers: [UserContractsController],
  providers: [UserContractsService]
})
export class UserContractsModule {}
