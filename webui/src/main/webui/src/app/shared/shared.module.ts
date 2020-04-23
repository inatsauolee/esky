import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {VisitsComponent} from "./components/visits/visits.component";

@NgModule({
	declarations: [VisitsComponent],
	imports: [
		CommonModule,
		RouterModule,
		NgxEchartsModule,
		NgbModule
	],
	exports: [VisitsComponent]
})
export class SharedModule { }
