import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { UserBankDetail } from './user-bankdetail.entity';

@Injectable()
export class UserBankdetailService extends TypeOrmCrudService<UserBankDetail>{
    constructor(@InjectRepository(UserBankDetail) public repository: Repository<UserBankDetail>) {
        super(repository)
    }
}
