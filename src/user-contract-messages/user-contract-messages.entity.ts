import { JobApplication } from "../job-application/job-application.entity";
import { Job } from "../job/job.entity";
import { UserContracts } from "../user-contracts/user-contracts.entity";
import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";

@Entity('user_contract_messages')
export class UserContractsMessages extends AbstractEntity {

    @Column()
    contract_id: number;

    @Column()
    message_text: string;

    @Column()
    user_id: number;

    // @ManyToOne(()=> UserContracts, contract => contract.messages)
    // contract: UserContracts;

}
