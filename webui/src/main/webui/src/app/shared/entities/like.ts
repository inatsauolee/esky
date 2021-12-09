import {EskyTracableObject} from "./esky-tracable-object";

export class Like extends EskyTracableObject{

    id: number;

    post: number;

    constructor(id: number, post: number, creator: any) {
        super();
        this.id = id;
        this.post = post;
        this.creator = creator;
    }
}