import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CurrentUser } from '@shared/decorators';
import { User } from 'user/user.entity';
import { JobReportReasonService } from './job-report-reason.service';

@Controller('job-report-reason')
export class JobReportReasonController {
    constructor(
        private readonly service: JobReportReasonService
    ) {}


    @Get()
    index() {

    }

    @Post()
    createOne(@Body() body: any, @CurrentUser() user: any) {

    }

    @Patch()
    updateOne() {

    }

    @Delete()
    deleteOne() {

    }
}
