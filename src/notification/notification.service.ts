import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Notifications } from './notification.entity';

@Injectable()
export class NotificationService extends TypeOrmCrudService<Notifications>{
    constructor(@InjectRepository(Notifications) public repository: Repository<Notifications>) {
        super(repository)
    }
}
