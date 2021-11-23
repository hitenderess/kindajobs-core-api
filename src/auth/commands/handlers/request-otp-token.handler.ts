import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { AppConfigService } from '@shared/config/app-config.service';
import { genOtpToken } from '@shared/utils/otp-generator';
import { Repository } from 'typeorm';
import { PhoneVerification } from '../../../auth/entities/phone-verification.entity';
import { RequestOtpTokenCommand } from '../request-otp-token.command';

@CommandHandler(RequestOtpTokenCommand)
export class RequestOtpTokenHandler implements ICommandHandler<RequestOtpTokenCommand> {

    constructor(
        @InjectRepository(PhoneVerification) private readonly phoneVerificationRepository: Repository<PhoneVerification>,
        private readonly appConfig: AppConfigService
    ) {}
    // todo: validate the rate limit
    execute(command: RequestOtpTokenCommand): Promise<PhoneVerification> {
        const { phoneNumber } = command;
        const otpToken = genOtpToken(100000, 999999);
        const pv = this.phoneVerificationRepository.create({
            otpToken,
            phoneNumber
        });
        pv.changeExpiryTime(this.appConfig.otpTokenExpirationTime);
        pv.changeRequestTime(this.appConfig.otpTokenRequestTime);

        // todo: raise a event that will send the otp to customer
        return this.phoneVerificationRepository.save(pv);
    }

}