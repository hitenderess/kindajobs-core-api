import { application } from "express";
import { Auth } from "../auth/entities/auth.entity";
import { JobApplication } from "../job-application/job-application.entity";
import { JobFiles } from "../job-files/job-files.entity";
import { UserContracts } from "../user-contracts/user-contracts.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";
import { JobType } from "@shared/enums";
import { JobPicture } from "./interfaces";

@Entity('job')
export class Job extends AbstractEntity {

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: JobType,
        default: JobType.Job
    })
    type: JobType

    @Column("simple-json")
    pictures: JobPicture

    @Column()
    duration: number

    @Column({
        default: false
    })
    protected: boolean
    
    @Column({
        default: false
    })
    prioritize: boolean

    @Column({
        default: 1
    })
    requiredCandidates: number

    @Column()
    price: number;

    @Column()
    status: string;

    @Column({
        default: true
    })
    isActive: boolean;

    @Column()
    commission: number;

    @Column('simple-array')
    tools: []
    
    @ManyToOne(() => Auth, auth => auth.jobs)
    user: Auth;

    // @OneToMany(() => JobApplication, application => application.job)
    // applications:JobApplication[];

    // @OneToMany(() => JobFiles, files => files.job)
    // files:JobFiles[];

    // @OneToMany(() => UserContracts, contract => contract.job)
    // contracts:UserContracts[];

    
}
