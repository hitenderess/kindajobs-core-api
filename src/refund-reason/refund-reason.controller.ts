import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { RefundReason } from './refund-reason.entity';
import { RefundReasonService } from './refund-reason.service';

@ApiTags('refund-reason')
@Controller('refund-reasons')
@Crud({
    model: {
        type: RefundReason
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
export class RefundReasonController implements CrudController<RefundReason> {
    constructor(public service: RefundReasonService) {}
}
