import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";
import { Job } from "job/job.entity";
import { User } from "user/user.entity";
import { ReportReason } from "report-reason/report-reason.entity";


@Entity('job_report_reasons')
export class JobReportReason extends AbstractEntity {

    @Column()
    jobId: number;

    @Column()
    userId: number;

    @Column()
    reportReasonId: number;

    @ManyToOne(
        () => Job
    )
    job: Job;

    @ManyToOne(
        () => User
    )
    user: User;

    @ManyToOne(
        () => ReportReason
    )
    reason: ReportReason;
}
