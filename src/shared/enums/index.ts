export * from './language-code';

export enum AllowScope {
    /**  The Authenticated means simply that the user is logged in  */
    Authenticated = 'Authenticated',
    /**  SuperAdmin can perform the most sensitive tasks */
    SuperAdmin = 'SuperAdmin',
    /**  Owner means the user owns this entity, e.g. a Customer's own Order */
    Owner = 'Owner',
    /**  Public means any unauthenticated user may perform the operation  */
    Public = 'Public',
}

export enum AdminRole {
    SuperAdmin = 'SuperAdmin',
}

export enum UserType {
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER',
    PROVIDER = 'PROVIDER',
    TENANT = 'TENANT',
}
