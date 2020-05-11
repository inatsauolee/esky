import {User} from "./user";
import {EskyTracableObject} from "./esky-tracable-object";

export class Class  extends EskyTracableObject{

    id: number;

    name: string;

    school: string;

    city: string;

    description: string;

    students: any[];

    constructor(id: number, name: string, school: string, city: string, description: string, students: any[]) {
        super();
        this.id = id;
        this.name = name;
        this.school = school;
        this.city = city;
        this.description = description;
        this.students = students;
    }
}