export class ValidationUtils {
    static validatePagination(page?: number, limit?: number) {
        const validPage = Math.max(1, page || 1);
        const validLimit = Math.min(100, Math.max(1, limit || 10));
        const skip = (validPage - 1) * validLimit;

        return { page: validPage, limit: validLimit, skip };
    }

    static validatePassword(password: string) {
        // At least 6 characters, max 64, with uppercase, lowercase, number and special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,64}$/;
        return passwordRegex.test(password);
    }
}