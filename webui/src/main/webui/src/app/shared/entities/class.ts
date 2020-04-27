import {User} from "./user";
import {EskyTracableObject} from "./esky-tracable-object";

export class Class  extends EskyTracableObject{

    id: number;

    name: string;

    school: string;

    city: string;

    description: string;

    students: User[];

}