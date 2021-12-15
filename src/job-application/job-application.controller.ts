import { Body, Controller, Get, Patch, Post, Req, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '@shared/decorators';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.guard';
import { CreateJobApplication, UpdateJobApplicationStatus } from './job-application.dto';
import { JobApplicationService } from './job-application.service';

@ApiTags('Job Application')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('job-application')
export class JobApplicationController {

    constructor(
        private readonly service: JobApplicationService
    ) { }

    @Get()
    index(@CurrentUser('sub') userId: number) {   
        console.log(userId, 'lll');
             
        return this.service.find(userId);
    }

    @Post()
    createOne(@CurrentUser('sub') userId: number, @Body() body: CreateJobApplication) {
        return this.service.createOne(body, userId);
    }

    @Patch('/status')
    updateOne(@CurrentUser('sub') userId: number, status: UpdateJobApplicationStatus) {
        return this.service.updateStatus(status, userId);
    }

}
