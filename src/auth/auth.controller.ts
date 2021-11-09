import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    @Post('otp-token')
    requestOtpToken() {
        
    }


    @Post('/signin')
    adminSignin() {}

    @Post('/userlogin')
    userLogin(){}

    
}
