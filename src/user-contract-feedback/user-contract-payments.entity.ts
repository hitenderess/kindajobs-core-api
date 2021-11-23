import { JobApplication } from "../job-application/job-application.entity";
import { Job } from "../job/job.entity";
import { UserContracts } from "../user-contracts/user-contracts.entity";
import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";

@Entity('user_contract_feedback')
export class UserContractsFeedback extends AbstractEntity {

    @Column()
    contract_id: number;

    @Column()
    user_id: number;

    @Column()
    message: string;

    @Column({
        default: false
    })
    is_flagged: boolean;

    @Column({
        default: false
    })
    is_reported: boolean;

    // @ManyToOne(()=> UserContracts, contract => contract.feedback_messages)
    // contract: UserContracts;

}
