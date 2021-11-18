export interface AccessTokenPayload {
    sub: string;
    aud: string;
    username?: string;
    phoneNumber?: string;
    emailAddress?: string;
    name?: string;
    activeTenant?: string;
    authorization?: any;
}
