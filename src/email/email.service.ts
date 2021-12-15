import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { AppConfigService } from '@shared/config/app-config.service';

@Injectable()
export class EmailService {

    constructor(private readonly mailerService: MailerService) { }

    async sendEmailVerificationOtp(emailAddress: string, otpToken: number) {
        return this.sendWithTemplate(emailAddress, 'provider-email-verification', 'Verify Email', {
            emailVerificationOtp: otpToken,
        });
    }

    async sendWithTemplate(to: string, template: string, subject: string, context: any = null, from = process.env.MAIL_FROM) {
        return await this.mailerService.sendMail({
            from,
            to,
            subject,
            template,
            context,
        })
    }
}
