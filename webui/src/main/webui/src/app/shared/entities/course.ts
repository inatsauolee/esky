import {Class} from "./class";
import {EskyTracableObject} from "./esky-tracable-object";

export class Course extends EskyTracableObject{

    id: number;

    name: string;

    subject: string;

    description: string;

    status: string;

    classes: Class[];

}