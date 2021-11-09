import { RefundReason } from "src/refund-reason/refund-reason.entity";
import { UserContractsPayments } from "src/user-contract-payments/user-contract-payments.entity";
import { UserContracts } from "src/user-contracts/user-contracts.entity";
import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('user_contract_refunds')
export class UserContractsRefunds extends AbstractEntity {

    @Column()
    contract_id: number;

    @Column()
    reason_id: number;

    @Column()
    refund_amount: number;

    @Column()
    description: string;

    @ManyToOne(() => UserContractsPayments, payment => payment.refunds)
    payment: UserContractsPayments;
    

}
