import { Gym } from './gym';

export interface Member {
    name: string;
    dob: Date;
    phoneNumber: number;
    address: string;
    email: string;
    registerGym?(gym: Gym): boolean;
    deregisterGym?(): boolean;
}
