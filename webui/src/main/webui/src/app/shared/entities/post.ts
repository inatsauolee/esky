import {EskyTracableObject} from "./esky-tracable-object";

export class Post extends EskyTracableObject{

    id: number;

    title: string;

    text: string;

    file: any;

    category: number;

    comments: any[];

    likes: any[];

    constructor(id: number, title: string, test: string, file: any, category: number) {
        super();
        this.id = id;
        this.title = title;
        this.text = test;
        this.file = file;
        this.category = category;
    }
}