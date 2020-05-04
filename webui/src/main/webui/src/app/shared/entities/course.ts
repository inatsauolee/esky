import {Class} from "./class";
import {EskyTracableObject} from "./esky-tracable-object";

export class Course extends EskyTracableObject{

    id: number;

    name: string;

    subject: string;

    description: string;

    status: string;

    date: Date;

    startTime: string;

    endTime: string;

    repeat: string;

    until: Date;

    classes: any[];

    constructor(id: number, name: string, subject: string, description: string, status: string, date: Date, startTime: string, endTime: string, repeat: string, until: Date, classes: Class[]) {
        super();
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.description = description;
        this.status = status;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.repeat = repeat;
        this.until = until;
        this.classes = classes;
    }
}