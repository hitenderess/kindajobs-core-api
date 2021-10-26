import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { RefundReason } from './refund-reason.entity';

@Injectable()
export class RefundReasonService extends TypeOrmCrudService<RefundReason> {
    constructor(@InjectRepository(RefundReason) public repository: Repository<RefundReason>) {
        super(repository)
    }
}
