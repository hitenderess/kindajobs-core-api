import { Column, Entity } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";

@Entity('user_bankdetail')
export class UserBankDetail extends AbstractEntity {

    @Column()
    account_holder_name: string;

    @Column()
    account_number: string;

    @Column()
    user_id:number;

    @Column({
        default: true
    })
    is_active: boolean;

}
