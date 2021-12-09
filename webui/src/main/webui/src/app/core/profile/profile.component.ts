import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { SidebarService } from '../../shared/services/sidebar.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {User} from "../../shared/entities/user";
import {UpdateUserAction, UserActionTypes} from "../../shared/store/actions";
import {Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";

@Component({
	selector: 'app-page-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

	public sidebarVisible: boolean = true;
	public loggedInUser: any;
	public fragment: string = "settings";
	public selectedFile: any;
	public uploadImageData: any;

    private ngUnsubscribe = new Subject();

	constructor(private toastr: ToastrService, private httpClient: HttpClient, private sidebarService: SidebarService, private store$: Store<any>, private cdr: ChangeDetectorRef, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.fragment.pipe(takeUntil(this.ngUnsubscribe)).subscribe((fragment: string) => {
			if (fragment) {
				this.fragment = fragment;
			}
		});
	}

	ngOnInit() {
		if (localStorage.getItem('currentUser')) {
			this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
		}
		if(!(this.loggedInUser as any).retrievedImage) {
			let base64Data = this.loggedInUser.file ? this.loggedInUser.file.fileByte : null;
			(this.loggedInUser as any).retrievedImage = 'data:image/jpeg;base64,' + base64Data;
		}
	}

	update(){
		if(this.uploadImageData) {
			//Make a call to the Spring Boot Application to save the image
			this.httpClient.post('http://localhost:8080/post/uploadFile', this.uploadImageData, { observe: 'response' })
				.subscribe((response) => {
						if (response.status === 200) {
							console.log('Image uploaded successfully');
							this.loggedInUser.file = response.body ? (response.body as any).id : null;
							this.store$.dispatch(new UpdateUserAction(this.loggedInUser));
							this.toastr.info('Profile updated successfully !', undefined, {
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
		} else {
			this.store$.dispatch(new UpdateUserAction(this.loggedInUser));
			this.toastr.info('Profile updated successfully !', undefined, {
				closeButton: true,
				positionClass: 'toast-top-right'
			});
		}
		localStorage.setItem('currentUser', JSON.stringify(this.loggedInUser));
	}

	onFileChanged(event) {
		//Select File
		this.selectedFile = event.target.files[0];
		this.uploadImageData = new FormData();
		this.uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
		const reader = new FileReader();
		reader.readAsDataURL(this.selectedFile);
		reader.onload = (_event) => {
			this.loggedInUser.retrievedImage = reader.result;
		};
	}

	ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

}
