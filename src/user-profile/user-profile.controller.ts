import { Controller } from '@nestjs/common';
import { UserProfile} from './user-profile.entity';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import {UserProfileService} from './user-profile.service';
import { AccessTokenPayload } from '../auth/interfaces/auth.interface';

@ApiTags('user-profile')
@Controller('user-profile')
@Crud({
    model: {
        type: UserProfile
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
@CrudAuth({
    property: 'user',
    filter: (user: AccessTokenPayload) => ({
        user_id: +user.sub,
    }),
    persist: (user: AccessTokenPayload) => ({
        user_id: +user.sub,
    }),
})
export class UserProfileController implements CrudController<UserProfile> {
    constructor(public service: UserProfileService) {}
}
