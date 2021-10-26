import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ReportReason } from './report-reason.entity';
import { ReportReasonService } from './report-reason.service';

@ApiTags('report-reason')
@Controller('report-reasons')
@Crud({
    model: {
        type: ReportReason
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
export class ReportReasonController implements CrudController<ReportReason> {
    constructor(public service: ReportReasonService) {}
}

