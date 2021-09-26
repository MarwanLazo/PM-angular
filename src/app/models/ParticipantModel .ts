import { GroupModel } from "./GroupModel";

export class ParticipantModel {

    id: number;
    name: string;
    email: string;
    phone: string;
    age: number;
    partGroup: GroupModel;
    constructor() {
        this.partGroup = new GroupModel();
    }
}