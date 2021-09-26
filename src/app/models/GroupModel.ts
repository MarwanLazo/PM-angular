import { RoundModel } from "./RoundModel";

export class GroupModel {

    id: number;
    name: string;
    place: string;
    count: number;
    round: RoundModel;

    constructor() {
        this.round = new RoundModel();
    }
}