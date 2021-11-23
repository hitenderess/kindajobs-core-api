export class RequestOtp {
    phoneNumber: string
}

export class VerifyOtp {
    phoneNumber: string
    otp: number
}