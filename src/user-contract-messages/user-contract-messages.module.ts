import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserContractMessagesController } from './user-contract-messages.controller';
import { UserContractsMessages } from './user-contract-messages.entity';
import { UserContractMessagesService } from './user-contract-messages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserContractsMessages])
  ],
  controllers: [UserContractMessagesController],
  providers: [UserContractMessagesService]
})
export class UserContractMessagesModule {}
