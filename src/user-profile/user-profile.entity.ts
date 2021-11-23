import { Auth } from "../auth/entities/auth.entity";
import { Role } from "../role/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";

@Entity('user_profile')
export class UserProfile extends AbstractEntity {

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    driver_license_no: string;

    @Column()
    ssn_id: string;


    @Column({
        default: true
    })
    newsletter_subscription: boolean;


    @Column({
        length: 500
    })
    street_address: string;

    @Column()
    cityId: number;

    @Column({
        default: true
    })
    termsconditionaccepted: boolean;

    @Column()
    stateId: number;

    @OneToOne(() => Auth, auth => auth.profile)
    @JoinColumn()
    user: Auth;

    @ManyToOne(() => Role)
    role: Role
}
