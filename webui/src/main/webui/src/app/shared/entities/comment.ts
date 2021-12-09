import {EskyTracableObject} from "./esky-tracable-object";

export class Comment extends EskyTracableObject{

    id: number;

    text: string;

    post: number;

    constructor(id: number, text: string, post: number) {
        super();
        this.id = id;
        this.text = text;
        this.post = post;
    }
}