import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * @description
 * All errors thrown in the server must use or extend this error class.
 *
 * Note that this class should not be directly used in code, but should be extended by
 * a more specific Error class.
 *
 * @docsCategory errors
 */
export abstract class HttpError extends HttpException {
    protected constructor(
        public message: string,
        public variables: { [key: string]: string | number } = {},
        public errorCode?: string,
        public statusCode: HttpStatus = HttpStatus.BAD_REQUEST,
    ) {
        super({ message, variables, errorCode }, statusCode);
    }
}
