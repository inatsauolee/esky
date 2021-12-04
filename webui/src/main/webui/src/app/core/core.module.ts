import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { routing } from './core.routing';
import { NgxEchartsModule } from 'ngx-echarts';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AdminComponent } from './admin/admin.component';
import { DetailTilesComponent } from './detail-tiles/detail-tiles.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { TimelinePostComponent } from './timeline-post/timeline-post.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ChatComponent } from './chat/chat.component';
import { GeneralFeedComponent } from './general-feed/general-feed.component';
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { MemberInfoComponent } from './member-info/member-info.component';
import { ManagedDataComponent } from './managed-data/managed-data.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { TotalRevenueComponent } from './total-revenue/total-revenue.component';
import { ApplicationsModule } from '../applications/applications.module';
import { FileManagerModule } from '../file-manager/file-manager.module';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';
import { CommonElementsModule } from '../common-elements/common-elements.module';
import { UiElementsModule } from '../ui-elements/ui-elements.module';
import { NavigationModule } from '../navigation/navigation.module';
import { FormModule } from '../form/form.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import {CourseComponent} from "./course/course.component";
import {ClassComponent} from "./class/class.component";
import {SharedModule} from "../shared/shared.module";
import {UserComponent} from "./user/user.component";
import {ProfileComponent} from "./profile/profile.component";
import {FormsModule} from "@angular/forms";
import {IConfig, NgxMaskModule} from "ngx-mask";
import {PageNumberPipe} from "../shared/pipes/page-number.pipe";
import {MultiSelectModule} from 'primeng/multiselect';
import {GetClassNamePipe} from "../shared/pipes/get-class-name.pipe";
import {DropdownModule} from "primeng/primeng";
import {BlogsModule} from "../blogs/blogs.module";


const maskConfig: Partial<IConfig> = {
	validation: false,
};

@NgModule({
    imports: [
        CommonModule,
        routing,
        NgxEchartsModule,
        NavigationModule,
        RichTextEditorAllModule,
        NgbModule,
        FullCalendarModule,
        ApplicationsModule,
        FileManagerModule,
		BlogsModule,
        PagesModule,
        RouterModule,
        CommonElementsModule,
        UiElementsModule,
        FormModule,
        SharedModule,
		DropdownModule,
        WidgetsModule,
		MultiSelectModule,
		NgbModule,
		NgxMaskModule.forRoot(maskConfig),
        FormsModule
    ],
	declarations: [
		PageNumberPipe,
		GetClassNamePipe,
		AdminComponent,
		IndexComponent,
		DetailTilesComponent,
		CardActionsComponent,
		TimelinePostComponent,
		ActivitiesComponent,
		ChatComponent,
		CourseComponent,
		ClassComponent,
		// SingleCourseComponent,
		ProfileComponent,
		UserComponent,
		GeneralFeedComponent,
		TwitterFeedComponent,
		MemberInfoComponent,
		ManagedDataComponent,
		TopProductsComponent,
		ReferralsComponent,
		TotalRevenueComponent,
		IotDashboardComponent
	],
	exports: [MultiSelectModule, DropdownModule]
})
export class CoreModule { }
