import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {SidebarService} from "../../shared/services/sidebar.service";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {User} from "../../shared/entities/user";
import {Comment} from "../../shared/entities/comment";
import {CommentAPostAction} from "../../shared/store/actions";
import {Post} from "../../shared/entities/post";
import {getAllCategories} from "../../shared/store/selectors/core.selectors";
import {LoadCategoriesAction} from "../../shared/store/actions/core.actions";
import {Pageable} from "../../shared/entities/pageable";
import {Direction, Sort} from "../../shared/constant/tools";
import {Category} from "../../shared/entities/category";

@Component({
	selector: 'app-blog-details',
	templateUrl: './blog-details.component.html',
	styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

	public sidebarVisible: boolean = true;

	public pageable: Pageable = new Pageable('0', '20', Sort.updated, Direction.desc);
	public loggedInUser: User;
	public currentPost: Post = new Post(null, '', '', '', null);
	public currentComment: Comment = new Comment(null, "", null);
	public categoryList: Category[] = [];

	constructor(private sidebarService: SidebarService, private store$: Store<any>, private router: Router, private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.loadCategories();
		this.store$.select(getAllCategories).subscribe(data => {
			if(data) {
				this.categoryList = data;
			}
		});
		if(localStorage.getItem('currentUser')) {
			this.loggedInUser =  JSON.parse(localStorage.getItem('currentUser'));
		}
		if(localStorage.getItem('currentPost')) {
			this.currentPost =  JSON.parse(localStorage.getItem('currentPost'));
		}
		if(this.currentPost.comments){
			this.currentPost.comments.map(com => {
				if(com.creator && !com.creator.retrievedImage) {
					let base64Data = com.creator.file ? com.creator.file.fileByte : null;
					com.creator.retrievedImage = 'data:image/jpeg;base64,' + base64Data;
				}
			});
		}
	}

	loadCategories() {
		this.store$.dispatch(new LoadCategoriesAction(this.pageable));
	}

	comment(){
		this.currentComment.post = this.currentPost.id;
		this.currentComment.updator = this.loggedInUser.id;
		this.currentComment.creator = this.loggedInUser;
		this.currentComment.created = new Date();
		this.currentComment.updated = new Date();
		this.store$.dispatch(new CommentAPostAction(this.currentComment));
		if(!this.currentPost.comments) {
			this.currentPost.comments = [];
		}

		let base64Data = this.loggedInUser.file ? this.loggedInUser.file.fileByte : null;
		(this.loggedInUser as any).retrievedImage = 'data:image/jpeg;base64,' + base64Data;

		this.currentComment.creator = this.loggedInUser;
		this.currentPost.comments.push(this.currentComment);
		this.currentComment = new Comment(null, "", null);
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}
}
