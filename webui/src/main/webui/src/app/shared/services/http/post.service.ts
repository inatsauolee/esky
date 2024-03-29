import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {api, environment} from "../../../../environments/environment";
import {User} from "../../entities/user";
import {Pageable} from "../../entities/pageable";
import {Post} from "../../entities/post";
import {Like} from "../../entities/like";
import {Comment} from "../../entities/comment";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class PostService {

    constructor(private http: HttpClient) {
    }

    getCountPosts() {
        return this.http.get<number>(environment.endpoint + api.post + api.count);
    }

    getAllPosts(pageable: Pageable) {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort);
        return this.http.get<Post[]>(environment.endpoint + api.post + api.all, {params});
    }

    getPostsByFilter(pageable: Pageable, filterValue: string): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Post[]>(environment.endpoint + api.post + api.all + api.filter, {params});
    }

    getPostsByCreator(pageable: Pageable, filterValue: string, idCreator: number): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Post[]>(environment.endpoint + api.post + api.all + api.creator + idCreator, {params});
    }

    getMyPostsByCreator(idCreator: number): any {
        return this.http.get<Post[]>(environment.endpoint + api.post + api.mine + api.creator + idCreator);
    }

    getPostsByStudent(pageable: Pageable, filterValue: string, idStudent: number): any {
        const params = new HttpParams()
            .set('page', pageable.page)
            .set('size', pageable.size)
            .set('direction', pageable.direction)
            .set('sort', pageable.sort)
            .set('filterValue', filterValue);
        return this.http.get<Post[]>(environment.endpoint + api.post + api.all + api.student + idStudent, {params});
    }

    getPostByCreator(creator: User) {
        return this.http.get<Post>(environment.endpoint + api.post + api.get + creator);
    }

    getPostById(id: number) {
        return this.http.get<Post>(environment.endpoint + api.post + api.get + id);
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(environment.endpoint + api.post + api.save, post, httpOptions);
    }

    updatePost(post: Post): Observable<Post> {
        console.log(JSON.stringify(post.id));
        return this.http.put<Post>(environment.endpoint + api.post + api.update + post.id, post, httpOptions);
    }

    deletePost(id: number) {
        return this.http.delete<Post>(environment.endpoint + api.post + api.delete + id);
    }

    getPostCount(type: any, id: any) {
        return this.http.get<number>(environment.endpoint + api.post + '/' + type + api.count + id);
    }

    likeAPost(like: Like): Observable<Like> {
        return this.http.post<Like>(environment.endpoint + api.like + api.save, like, httpOptions);
    }

    dislikeAPost(like: any) {
        return this.http.post<any>(environment.endpoint + api.like + api.delete,  like, httpOptions);
    }

    commentAPost(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(environment.endpoint + api.comment + api.save, comment, httpOptions);
    }
}