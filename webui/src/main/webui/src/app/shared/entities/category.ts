import {EskyTracableObject} from "./esky-tracable-object";

export class Category extends EskyTracableObject{

    id: number;

    name: string;

    description: string;

    constructor(id: number, name: string, description: string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
    }
}