import { ID } from '../types';

export interface Permission {
    id: ID;
    code: string;
    name: string;
    description: string;
}
