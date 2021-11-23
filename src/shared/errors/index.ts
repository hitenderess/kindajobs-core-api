import { HttpError } from './http-error';

export class OtpTokenNotRecognized extends HttpError {
    constructor() {
        super('OtpTokenNotRecognized', {}, 'OTP_TOKEN_NOT_RECOGNIZED');
    }
}
