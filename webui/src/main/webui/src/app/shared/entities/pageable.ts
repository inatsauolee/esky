export class Pageable {
    page: string;
    size: string;
    sort: string;
    direction: string;

    constructor(page: string, size: string, sort: string, direction: string) {
        this.page = page;
        this.size = size;
        this.sort = sort;
        this.direction = direction;
    }
}
