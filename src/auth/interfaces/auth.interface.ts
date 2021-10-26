export interface AccessTokenPayload {
    sub: string;
    aud: string;
    mobileNumber?: string;
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
}
