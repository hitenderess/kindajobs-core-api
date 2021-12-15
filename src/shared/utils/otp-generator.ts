import { isDevMode } from "app.environment";

export const genOtpToken = (min: number, max: number) => {
    if (isDevMode) {
        return 123456;
    }
    return Math.floor(Math.random() * (max - min) + min);
}
