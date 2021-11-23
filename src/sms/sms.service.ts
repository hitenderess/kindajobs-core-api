import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
    constructor() {}

    async sendOtpToken(otpToken: number, phoneNumber: string) {
        return this.send(otpToken, phoneNumber);
    }

    async send(token: number, phoneNumber: string) {
        return {
            token,
            phoneNumber
        }
    }
}
