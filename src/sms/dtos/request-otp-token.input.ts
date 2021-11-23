import { ApiProperty } from '@nestjs/swagger';

export class RequestOtpTokenInput {

    @ApiProperty({ description: '6 digits otp token', example: 123456 })
    otpToken: number;

    @ApiProperty({ description: 'The phone number of service provider.', example: '60165996794' })
    phoneNumber: string;

}
