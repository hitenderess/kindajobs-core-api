import { AbstractEntity } from "src/shared/entities/abstract.entity";
import { BeforeInsert, Column, Entity, Index } from "typeorm";
import * as moment from 'moment';
import { IsDefined, IsNumberString } from "class-validator";

@Entity('phone_verifications')
export class PhoneVerification extends AbstractEntity {

    @Index()
    @Column()
    @IsDefined({ always: true })
    otpToken: number;

    @Column({ type: 'timestamptz' })
    expiredAt: Date;

    @Column({ type: 'timestamptz' })
    nextRequestAt: Date;

    @Column()
    @IsNumberString()
    @IsDefined({ always: true })
    phoneNumber: string;

    public changeExpiryTime(seconds: number) {
        this.expiredAt = moment
            .utc()
            .add(seconds, 'seconds')
            .toDate();
    }

    public changeRequestTime(seconds: number) {
        this.nextRequestAt = moment
            .utc()
            .add(seconds, 'seconds')
            .toDate();
    }

    public expiresInSeconds(now: Date): number {
        return moment.utc(this.expiredAt).diff(moment.utc(now), 'seconds');
    }

    public numberOfSecondsBeforeNextRequest(now: Date): number {
        return moment.utc(this.nextRequestAt).diff(moment.utc(now), 'seconds');
    }

    public numberOfSecondsBeforeExpiry(now: Date): number {
        return moment.utc(this.expiredAt).diff(moment.utc(now), 'seconds');
    }

    public isBeforeExpiry(now: Date): boolean {
        return this.numberOfSecondsBeforeExpiry(now) >= 0;
    }

    public isWithinRateLimit(now: Date): boolean {
        return this.numberOfSecondsBeforeNextRequest(now) <= 0;
    }
}
