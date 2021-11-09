import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Tool } from './tool.entity';

@Injectable()
export class ToolsService extends TypeOrmCrudService<Tool> {
    constructor(@InjectRepository(Tool) public repository: Repository<Tool>) {
        super(repository)
    }
}
