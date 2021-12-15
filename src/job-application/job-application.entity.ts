import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";
import { JobApplicationStatus } from "@shared/enums/job-application-status";
import { Job } from "job/job.entity";

@Entity('job-application')
export class JobApplication extends AbstractEntity {

    @Column()
    jobId: number;

    @Column()
    userId: number;

    @Column({
        default: JobApplicationStatus.Applied
    })
    applicationStatus: JobApplicationStatus;

    @Column({
        default: true
    })
    isActive: boolean;

    @ManyToOne(
        () => Job,
    )
    job: Job;
}
