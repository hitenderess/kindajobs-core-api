import { Job } from "src/job/job.entity";
import { AbstractEntity } from "src/shared/entities/abstract.entity";
import { Skill } from "src/skill/skill.entity";
import { UserFeedbacks } from "src/user-feedback/user-feedback.entity";
import { UserNotifications } from "src/user-notifications/user-notifications.entity";
import { UserProfile } from "src/user-profile/user-profile.entity";
import { Column, Entity, OneToOne, JoinColumn, OneToMany, ManyToMany } from "typeorm";

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

    @OneToOne(() => UserProfile, profile => profile.user)
    profile: UserProfile;

    @OneToMany(() => Job, job => job.user)
    jobs:Job[];

    @ManyToMany(() => Skill )
    skills:Skill[];

    @OneToMany(() => UserNotifications, notification => notification.user)
    notifications:UserNotifications[];

    @OneToMany(() => UserFeedbacks, feedback => feedback.user)
    feedbacks:UserFeedbacks[];
    
}
