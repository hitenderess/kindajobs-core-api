import { Column, Entity } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";
import { JobStatus, JobType } from "@shared/enums";
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

    @Column("simple-json", {
        nullable: true
    })
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

    @Column({
        default: JobStatus.Published
    })
    status: JobStatus;

    @Column({
        default: true
    })
    isActive: boolean;

    @Column({
        nullable: true
    })
    commission: number;

    @Column('simple-array', {
        nullable: true
    })
    tools: []

    @Column('simple-json')
    jobLocation: Geometry;

    @Column()
    userId: number;
}
