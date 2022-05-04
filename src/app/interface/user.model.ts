import { UserLevel } from "./user-level.model";

export class User{

    userId! : string;
    email! : string;
    status! : boolean;
	password! : string;
    lastName! : string;
    firstName! : string;
    groups! : UserLevel[];
    createdOn! : Date;
    updatedOn! : Date;
}
