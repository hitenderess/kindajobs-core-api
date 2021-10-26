import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ReportReason } from './report-reason.entity';

@Injectable()
export class ReportReasonService extends TypeOrmCrudService<ReportReason>{
    constructor(@InjectRepository(ReportReason) public repository: Repository<ReportReason>) {
        super(repository)
    }
}
