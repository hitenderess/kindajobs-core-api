import { JobApplication } from "src/job-application/job-application.entity";
import { Job } from "src/job/job.entity";
import { UserContractsRefunds } from "src/user-contract-refunds/user-contract-refunds.entity";
import { UserContracts } from "src/user-contracts/user-contracts.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('user_contract_payments')
export class UserContractsPayments extends AbstractEntity {

    @Column()
    contract_id: number;

    @Column()
    gross_amount: number;

    @Column()
    commission_amount: number;

    @Column()
    total_amount: number;

    @ManyToOne(()=> UserContracts, contract => contract.payments)
    contract: UserContracts;

    @OneToMany(()=> UserContractsRefunds, refund => refund.payment)
    refunds: UserContractsRefunds;

}
