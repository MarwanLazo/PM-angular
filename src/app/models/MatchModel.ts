import { ParticipantModel } from "./ParticipantModel";
import { RoundModel } from "./RoundModel";

export class MatchModel {

    id: number;
    desc: string;
    partOne: ParticipantModel;
    partTwo: ParticipantModel;
    winner: ParticipantModel;
    round: RoundModel;
    played: boolean;
    matchDate: Date;

    constructor() {
        this.round = new RoundModel();
        this.partOne = new ParticipantModel();
        this.partTwo = new ParticipantModel();
        this.winner = new ParticipantModel();
    }
}