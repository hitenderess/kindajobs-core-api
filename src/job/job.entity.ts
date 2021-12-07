import { User } from "../user/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";
import { JobType } from "@shared/enums";
import { JobPicture } from "./interfaces";

class Geometry {
    lat: number;
    long: number;
}
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

    @Column('simple-json')
    jobLocation: Geometry;
    
    // @ManyToOne(() => User, user => user.jobs)
    // user: Auth;
}
