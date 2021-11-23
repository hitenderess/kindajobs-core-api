export interface AccessTokenPayload {
    sub: number;
    aud: string;
    phoneNumber: string;
    token?: string
}
