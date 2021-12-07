import { Auth } from "../auth/entities/auth.entity-depricated";
import { Job } from "../job/job.entity";
import { UserContracts } from "../user-contracts/user-contracts.entity";
import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";

@Entity('job-application')
export class JobApplication extends AbstractEntity {

    @Column({
        default: true
    })
    isActive: boolean;

    @Column()
    job_id: number;

    @Column()
    applicant_id: number;

    @Column()
    application_status: string;

    // @ManyToOne(() => Job, job => job.applications)
    // job: Job;

    // @OneToOne(() => UserContracts, contracts => contracts.application)
    // contract: UserContracts;

    // @ManyToOne(() => Auth)
    // Applicant: Auth;

}
