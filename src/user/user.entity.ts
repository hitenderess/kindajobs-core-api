import { AbstractEntity } from "@shared/entities/abstract.entity";
import { UserType } from "@shared/enums";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends AbstractEntity {

    @Column()
    phoneNumber: string;

    @Column({
        nullable: true
    })
    emailAddress: string;

    @Column({
        nullable: true
    })
    passwordHash: string;

    @Column({
        default: false
    })
    isLogin: boolean;

    @Column({
        default: false
    })
    isEmailVerified: boolean;

    @Column({
        default: false
    })
    isPhoneVerified: boolean;

    @Column({
        nullable: true
    })
    passwordResetToken: string;

    @Column({
        type: 'enum',
        enum: UserType,
        default: UserType.Privider
    })
    type: string;

    @Column({
        default: true
    })
    isActive: boolean;
}
