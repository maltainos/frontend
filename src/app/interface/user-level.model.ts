import { Role } from "./role.model";

export interface UserLevel{

    levelId : string
    levelName : string;
    roles : Role[];
    roleConfig : string[];
    createdOn : Date;
    updatedOn : Date;
}
