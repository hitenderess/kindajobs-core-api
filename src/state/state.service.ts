import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';

@Injectable()
export class StateService extends TypeOrmCrudService<State> {
    constructor(@InjectRepository(State) public repository: Repository<State>) {
        super(repository)
    }
}
