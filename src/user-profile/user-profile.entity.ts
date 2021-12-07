import { Auth } from "../auth/entities/auth.entity-depricated";
import { Role } from "../role/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";
import { User } from "user/user.entity";

@Entity('user_profile')
export class UserProfile extends AbstractEntity {

    @Column()
    driverLicenseNumber: string;

    @Column()
    ssn: string;

    @Column('simple-array')
    skills: [];

    @Column()
    accountHolder: string;

    @Column()
    accountNumber: string;

    @Column({
        length: 500,
        nullable: true
    })
    streetAddress: string;

    @Column({
        nullable: true
    })
    cityId: number;

    @Column({
        nullable: true
    })
    stateId: number;

    @OneToOne(() => User, user => user.profile)
    @JoinColumn()
    user: Auth;
}
