import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FullCalendarModule } from 'ng-fullcalendar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxGalleryModule } from 'ngx-gallery';
import {EffectsModule} from '@ngrx/effects';

import * as $ from 'jquery';
import {UserService} from "./shared/services/http/user.service";
import {StoreModule} from "@ngrx/store";
import {sharedReducers} from "./shared/store/reducers";
import {effects} from "./shared/store/effects";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        routing,
        NgbModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        // RouterModule.forRoot([]),
        // StoreModule.forFeature('sharedState', sharedReducers),
        // EffectsModule.forFeature(effects),
        RichTextEditorAllModule,
        FullCalendarModule,
        NgMultiSelectDropDownModule.forRoot(),
        LeafletModule.forRoot(),
        NgxGalleryModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
