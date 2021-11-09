import { Controller } from '@nestjs/common';
import { UserBankDetail} from './user-bankdetail.entity';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import {UserBankdetailService} from './user-bankdetail.service';
import { AccessTokenPayload } from '../auth/interfaces/auth.interface';

@ApiTags('user-bankdetail')
@Controller('user-bankdetail')
@Crud({
    model: {
        type: UserBankDetail
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
        user_id: user.sub,
    }),
    persist: (user: AccessTokenPayload) => ({
        user_id: +user.sub,
    }),
})
export class UserBankdetailController implements CrudController<UserBankDetail> {
    constructor(public service: UserBankdetailService) {}
}

