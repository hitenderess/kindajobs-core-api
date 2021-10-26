import { AbstractEntity } from "src/shared/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity('users')
export class Auth extends AbstractEntity {

    @Column()
    emailAddress: string;

    @Column()
    mobileNumber: string;

    @Column()
    passwordHash: string;

    @Column({
        default: false
    })
    isLogin: boolean;

    @Column({
        default: true
    })
    isActive: boolean;

    @Column({
        default: false
    })
    isEmailVerified: boolean;

    @Column({
        default: false
    })
    isPhoneVerified: boolean;

    @Column()
    passwordResetToken: string;
}
