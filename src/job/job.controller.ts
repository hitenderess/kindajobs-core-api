import { Controller } from '@nestjs/common';
import { Job } from './job.entity';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { JobService } from './job.service';
import { AccessTokenPayload } from '../auth/interfaces/auth.interface';

@ApiTags('job')
@Controller('job')
@Crud({
    model: {
        type: Job
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
        userId: +user.sub,
    }),
    persist: (user: AccessTokenPayload) => ({
        userId: +user.sub,
    }),
})
export class JobController implements CrudController<Job> {
    constructor(public service: JobService) {}
}
