import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OtpTokenRequestedEvent } from 'auth/events/otp-token-requested.event';
import { SmsService } from 'sms/sms.service';

@EventsHandler(OtpTokenRequestedEvent)
export class OtpTokenRequestedHandler implements IEventHandler<OtpTokenRequestedEvent> {
    constructor(public service: SmsService) {}

    async handle(event: OtpTokenRequestedEvent) {
        const { phoneNumber, otpToken } = event;
        await this.service.sendOtpToken(otpToken, phoneNumber);
    }
}
