import { OtpOver } from "@shared/enums/auth";

export class RequestOtp {
    resource: string;
    over: OtpOver;
}

export class VerifyOtp {
    phoneNumber: string
    otp: number
}

export class Signup {
    personal: {
        profilePic: string,
        phoneNumber: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
    };
    skills: [];
    bank: {
        accountHolder: string,
        accountNumber: string,
    };
    backgroundCheck: {
        driverLicenseNumber: string,
        ssn: string,
    };
}