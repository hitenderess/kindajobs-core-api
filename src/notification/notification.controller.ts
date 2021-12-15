import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { AccessTokenPayload } from 'auth/interfaces/auth.interface';
import { Notifications } from './notification.entity';
import { NotificationService } from './notification.service';

@ApiTags('Nofification')
@Crud({
    model: {
        type: Notifications
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
@Controller('notification')
export class NotificationController  implements CrudController<Notifications> {
    constructor(public service: NotificationService) {}
}
