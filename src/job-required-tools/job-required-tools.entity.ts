import { Job } from "src/job/job.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('job-required-tools')
export class JobRequiredTools extends AbstractEntity {

    @Column()
    job_id: number;

    @Column()
    tool_id: number;

    @Column()
    description: string;

    @ManyToOne(() => Job, job => job.files)
    job: Job;

    
}
