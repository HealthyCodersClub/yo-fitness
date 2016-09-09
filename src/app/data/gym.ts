import { Member } from './member';
import { Program } from './program';

export interface Gym {
    name: string;
    location: {
        lat: number,
        lon: number
    };
    members: Member[];
    programs?: [{ program: Program, fees: number }];
    getMembers?(): Member[];
    createProgram(program: Program, fees: number): Program;
    linkProgramToMember(member: Member, program: Program);
}
