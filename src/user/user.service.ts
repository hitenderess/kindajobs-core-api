import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly repository: Repository<User>
    ){}


    async findByPhoneNumber(phoneNumber: string) {
        return await this.repository.findOne({ phoneNumber })
    }

    async createBasicOne(phoneNumber: string, userType: string): Promise<User>  {
        const user = this.repository.create({
            phoneNumber: phoneNumber,
            type: userType
        });
        return this.repository.save(user);
    }
}
