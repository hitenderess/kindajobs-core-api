import { AbstractEntity } from "@shared/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity('master_report_reason')
export class ReportReason extends AbstractEntity {
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