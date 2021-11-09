import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobService extends TypeOrmCrudService<Job>{
    constructor(@InjectRepository(Job) public repository: Repository<Job>) {
        super(repository)
    }
}

