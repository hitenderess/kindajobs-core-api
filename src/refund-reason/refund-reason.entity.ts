import { AbstractEntity } from "@shared/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity('master_refund_reason')
export class RefundReason extends AbstractEntity {
    @Column({
        type: 'text'
    })
    reason: string;

    @Column({
        length: 3
    })
    reasonCode: string;
    
    @Column({
        default: true
    })
    isActive: boolean;
}