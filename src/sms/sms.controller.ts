import { Post, Controller, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { RequestOtpTokenInput } from './dtos/request-otp-token.input';
import { SmsService } from './sms.service';

@ApiTags('test')
@Controller('sms')
export class SmsController {
    constructor(public service: SmsService) {}

}
