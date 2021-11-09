import { application } from "express";
import { Auth } from "src/auth/entities/auth.entity";
import { JobApplication } from "src/job-application/job-application.entity";
import { JobFiles } from "src/job-files/job-files.entity";
import { UserContracts } from "src/user-contracts/user-contracts.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('job')
export class Job extends AbstractEntity {

    
    @Column({
        default: true
    })
    is_active: boolean;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    job_price:number;

    @Column()
    commission:number;

    @Column()
    total_amount:number;

    @Column()
    job_status:string;

    @ManyToOne(() => Auth, auth => auth.jobs)
    user: Auth;

    @OneToMany(() => JobApplication, application => application.job)
    applications:JobApplication[];

    @OneToMany(() => JobFiles, files => files.job)
    files:JobFiles[];

    @OneToMany(() => UserContracts, contract => contract.job)
    contracts:UserContracts[];

    
}
