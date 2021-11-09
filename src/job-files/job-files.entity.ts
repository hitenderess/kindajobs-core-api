import { Auth } from "src/auth/entities/auth.entity";
import { Job } from "src/job/job.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('job-files')
export class JobFiles extends AbstractEntity {

    
    @Column({
        default: true
    })
    is_active: boolean;

    @Column()
    job_id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    file_path: string;

    @ManyToOne(() => Job, job => job.files)
    job: Job;
}
