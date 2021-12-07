import { AbstractEntity } from "@shared/entities/abstract.entity";
import { UserType } from "@shared/enums";
import { Column, Entity, OneToOne } from "typeorm";
import { UserProfile } from "user-profile/user-profile.entity";

@Entity()
export class User extends AbstractEntity {

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        nullable: true
    })
    profilePic: string;

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
        default: UserType.Provider
    })
    type: string;

    @Column({
        default: true
    })
    isActive: boolean;

    @OneToOne(
        () => UserProfile,
        profile => profile.user,
        { cascade: true }
    )
    profile: UserProfile;
}
