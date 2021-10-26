import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService extends TypeOrmCrudService<City>{
    constructor(@InjectRepository(City) public repository: Repository<City>) {
        super(repository)
    }
}
