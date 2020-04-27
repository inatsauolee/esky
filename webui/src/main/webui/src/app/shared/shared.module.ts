import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {VisitsComponent} from "./components/visits/visits.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {effects} from "./store/effects";
import {sharedReducers} from "./store/reducers";

@NgModule({
	declarations: [VisitsComponent],
	imports: [
		CommonModule,
		RouterModule,
		NgxEchartsModule,
		StoreModule.forFeature('sharedState', sharedReducers),
		EffectsModule.forFeature(effects),
		NgbModule
	],
	exports: [VisitsComponent]
})
export class SharedModule { }
