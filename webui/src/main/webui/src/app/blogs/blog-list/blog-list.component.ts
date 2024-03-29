import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {SidebarService} from "../../shared/services/sidebar.service";
import {
	AddPostAction, DislikeAPostAction, LikeAPostAction,
	LoadPostsAction,
	LoadPostsByFilterAction
} from "../../shared/store/actions";
import {Store} from "@ngrx/store";
import {User} from "../../shared/entities/user";
import {Pageable} from "../../shared/entities/pageable";
import {Direction, Sort} from "../../shared/constant/tools";
import {Post} from "../../shared/entities/post";
import {Like} from "../../shared/entities/like";
import {getAllPosts} from "../../shared/store/selectors/post.selectors";
import {Router} from "@angular/router";
import {LoadCategoriesAction} from "../../shared/store/actions/core.actions";
import {getAllCategories} from "../../shared/store/selectors/core.selectors";
import {Category} from "../../shared/entities/category";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
	selector: 'app-blog-list',
	templateUrl: './blog-list.component.html',
	styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

	public sidebarVisible: boolean = true;
	public retrievedImage: any;
	base64Data: any;

	public loggedInUser: User;
	public pageable: Pageable = new Pageable('0', '20', Sort.updated, Direction.desc);
	public postList: Post[] = [];
	public categoryList: Category[] = [];
	public filterValue: string = '';
	public postToAdd: Post = new Post(null, '', '', '', null);
	public selectedFile: File;

	constructor(private toastr: ToastrService, private httpClient: HttpClient, private sidebarService: SidebarService, private store$: Store<any>, private router: Router, private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
		if(localStorage.getItem('currentUser')) {
			this.loggedInUser =  JSON.parse(localStorage.getItem('currentUser'));
		}
		this.loadCategories();
		this.loadPosts();
		this.store$.select(getAllCategories).subscribe(data => {
			if(data) {
				this.categoryList = data;
			}
		});
		this.store$.select(getAllPosts).subscribe(data => {
			if(data) {
				this.postList = data;
			}
		});
	}

	loadCategories() {
		this.store$.dispatch(new LoadCategoriesAction(this.pageable));
	}

	loadPosts() {
		if(this.filterValue === '') {
			this.store$.dispatch(new LoadPostsAction(this.pageable));
		} else {
			this.store$.dispatch(new LoadPostsByFilterAction({pageable: this.pageable, filterValue: this.filterValue}));
		}

	}

	post() {
		console.log(this.selectedFile);
		//FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
		const uploadImageData = new FormData();
		uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
		const reader = new FileReader();
		reader.readAsDataURL(this.selectedFile);
		reader.onload = (_event) => {
			this.retrievedImage = reader.result;
		};

		//Make a call to the Spring Boot Application to save the image
		this.httpClient.post('http://localhost:8080/post/uploadFile', uploadImageData, { observe: 'response' })
			.subscribe((response) => {
					if (response.status === 200) {
						console.log('Image uploaded successfully');
						this.postToAdd.creator = this.loggedInUser;
						this.postToAdd.updator = this.loggedInUser.id;
						this.postToAdd.file = response.body ? (response.body as any).id : null;
						this.store$.dispatch(new AddPostAction({post: this.postToAdd, file: this.retrievedImage}));
						this.clear();
						this.toastr.info('Posted successfully !', undefined, {
							closeButton: true,
							positionClass: 'toast-top-right'
						});
					} else {
						this.toastr.info('Image not uploaded successfully !', undefined, {
							closeButton: true,
							positionClass: 'toast-top-right'
						});
					}
				}
			);
	}

	goToPost(post: any) {
		localStorage.setItem('currentPost', JSON.stringify(post));
		this.router.navigate(['/posts/post-details']);
	}

	like(post: any) {
		this.postList.map((p: any) =>{
			if(p.id == post.id) {
				p.liked = true;
				if(!p.likes) {
					p.likes =[];
				}
				p.likes.push(new Like(null, p.id, this.loggedInUser));
			}
		});
		this.store$.dispatch(new LikeAPostAction(new Like(null, post.id, {id: this.loggedInUser.id})));
	}

	dislike(post: any) {
		let myLike = null;
		post.likes.map(like => {
			if(like.creator.id == this.loggedInUser.id) {
				myLike = like;
			}
		});
		this.store$.dispatch(new DislikeAPostAction(myLike));
	}

	onFileChanged(event) {
		//Select File
		this.selectedFile = event.target.files[0];
	}

	clear(){
		this.postToAdd = new Post(null, '', '', '', null);
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

}
