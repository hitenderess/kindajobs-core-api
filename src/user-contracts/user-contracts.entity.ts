import { JobApplication } from "../job-application/job-application.entity";
import { Job } from "../job/job.entity";
import { UserContractsFeedback } from "../user-contract-feedback/user-contract-payments.entity";
import { UserContractsMessages } from "../user-contract-messages/user-contract-messages.entity";
import { UserContractsPayments } from "../user-contract-payments/user-contract-payments.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";

@Entity('user_contracts')
export class UserContracts extends AbstractEntity {

    @Column()
    job_id: number;

    @Column()
    application_id: number;

    @Column()
    applicant_id: number;

    @Column()
    contact_start_at:Date;

    @Column()
    contact_end_at:Date;

    @Column()
    contact_budget: number;

    @Column()
    status:string;

    // @ManyToOne(()=> Job, job => job.contracts)
    // job: Job

    // @OneToOne(() => JobApplication, application => application.contract)
    // application: JobApplication;

    // @OneToMany(() => UserContractsMessages, messages => messages.contract)
    // messages: UserContractsMessages[];

    // @OneToMany(() => UserContractsPayments, payments => payments.contract)
    // payments: UserContractsPayments[];

    // @OneToMany(() => UserContractsFeedback, messages => messages.contract)
    // feedback_messages: UserContractsFeedback[];



}
