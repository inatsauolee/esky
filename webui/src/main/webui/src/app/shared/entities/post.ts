import {EskyTracableObject} from "./esky-tracable-object";

export class Post extends EskyTracableObject{

    id: number;

    title: string;

    test: string;

    file: string;

    category: number;

    constructor(id: number, title: string, test: string, file: string, category: number) {
        super();
        this.id = id;
        this.title = title;
        this.test = test;
        this.file = file;
        this.category = category;
    }
}