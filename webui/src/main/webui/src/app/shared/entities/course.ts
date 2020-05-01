import {Class} from "./class";
import {EskyTracableObject} from "./esky-tracable-object";

export class Course extends EskyTracableObject{

    id: number;

    name: string;

    subject: string;

    description: string;

    status: string;

    date: Date;

    time: string;

    repeat: string;

    until: Date;

    classes: Class[];

    constructor(id: number, name: string, subject: string, description: string, status: string, date: Date, time: string, repeat: string, until: Date, classes: Class[]) {
        super();
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.description = description;
        this.status = status;
        this.date = date;
        this.time = time;
        this.repeat = repeat;
        this.until = until;
        this.classes = classes;
    }
}