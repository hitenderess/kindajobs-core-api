import { Job } from "src/job/job.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('job-required-skills')
export class JobRequiredSkills extends AbstractEntity {

    @Column()
    job_id: number;

    @Column()
    skills_id: number;

    @ManyToOne(() => Job, job => job.files)
    job: Job;

    
}
