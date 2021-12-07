import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RequestOtp, Signup, VerifyOtp } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(
        private service: AuthService
    ) {}

    @Post('otp-token')
    requestOtpToken(@Body() body: RequestOtp) {
        return this.service.requestOtpToken(body);
    }

    @Post('verify-otp-token')
    verifyOtpToken(@Body() input: VerifyOtp) {
        return this.service.verifyOtpToken(input.phoneNumber, input.otp);
    }

    @Post('signup')
    signup(@Body() body: Signup) {
        return this.service.signupUser(body);
    }

}
