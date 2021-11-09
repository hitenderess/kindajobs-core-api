import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Injectable()
export class UserProfileService extends TypeOrmCrudService<UserProfile>{
    constructor(@InjectRepository(UserProfile) public repository: Repository<UserProfile>) {
        super(repository)
    }
}
