import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJobApplication, UpdateJobApplicationStatus } from './job-application.dto';
import { JobApplication } from './job-application.entity';

@Injectable()
export class JobApplicationService {
    constructor(
        @InjectRepository(JobApplication) private readonly repository: Repository<JobApplication>
    ) {}

    find(userId: number) {
        return this.repository.find({
            where: { userId },
            relations: ['job']
        })
    }

    createOne(input: CreateJobApplication, userId: number) {
        const data = { ...input, userId }
        const application = this.repository.create(data);
        return this.repository.save(application);
    }

    async updateStatus(input: UpdateJobApplicationStatus, userId: number) {
        const application = await this.repository.findOne({
            where: {jobId: input.jobId, userId}
        });

        if (!application) {
            throw new NotFoundException();
        }

        // todo(hitender): Make sure service provider can't set APPROVED, REJECTED, COMLETED status
        application.applicationStatus = input.applicationStatus;
        return this.repository.save(application);
    }

}
