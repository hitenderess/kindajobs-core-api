import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { Signup } from 'auth/auth.dto';
import { UserType } from '@shared/enums';
import { UserProfile } from 'user-profile/user-profile.entity';
import { UserProfileService } from 'user-profile/user-profile.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly repository: Repository<User>,
        private readonly userProfile: UserProfileService
    ){}


    async findByPhoneNumber(phoneNumber: string) {
        return await this.repository.findOne({ phoneNumber })
    }

    async createOne(userInfo: Signup): Promise<User>  {
        const userInst = this.repository.create({
          ...userInfo.personal,
          type: UserType.Provider,
        });
        userInst.profile =  this.userProfile.forUser(userInfo);
        const user = await this.repository.save(userInst);
        
        return user;
    }

}
