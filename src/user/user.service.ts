import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CreateUserLoginDto } from 'src/auth/auth.dto';
import { Auth } from 'src/auth/entities/auth.entity';
import { LatLngDto } from 'src/auth/lat-lng.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService<Auth>{
    constructor(
        @InjectRepository(Auth) private readonly repository: Repository<Auth>,
        private commandBus: CommandBus,
        private queryBus: QueryBus,
    ) {
        super(repository);
    }

    

    

    
}
