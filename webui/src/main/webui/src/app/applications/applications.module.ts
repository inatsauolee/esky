import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FullCalendarModule } from 'ng-fullcalendar';
import { RouterModule } from '@angular/router';

import { ApplicationsComponent } from './applications/applications.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { AppChatComponent } from './app-chat/app-chat.component';
import { AppCalendarComponent } from './app-calendar/app-calendar.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ApplicationsComponent,
    InboxComponent,
    ComposeComponent,
    AppChatComponent,
    AppCalendarComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    NgbModule,
    RichTextEditorAllModule,
    FullCalendarModule,
    SharedModule,
    RouterModule
  ]
})
export class ApplicationsModule { }
