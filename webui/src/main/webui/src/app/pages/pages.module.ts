import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBlankComponent } from './page-blank/page-blank.component';
import { PageProfileV2Component } from './page-profile-v2/page-profile-v2.component';
import { PageGalleryComponent } from './page-gallery/page-gallery.component';
import { PageTimelineComponent } from './page-timeline/page-timeline.component';
import { PagePricingComponent } from './page-pricing/page-pricing.component';
import { PageInvoicesComponent } from './page-invoices/page-invoices.component';
import { PageInvoicesV2Component } from './page-invoices-v2/page-invoices-v2.component';
import { PageSearchResultsComponent } from './page-search-results/page-search-results.component';
import { PageHelperClassComponent } from './page-helper-class/page-helper-class.component';
import { PageTestimonialsComponent } from './page-testimonials/page-testimonials.component';
import { PageFaqComponent } from './page-faq/page-faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageMaintananceComponent } from './page-maintanance/page-maintanance.component';
import { RouterModule } from '@angular/router';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonElementsModule } from '../common-elements/common-elements.module';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
	declarations: [
		PageBlankComponent,
		PageProfileV2Component,
		PageGalleryComponent,
		PageTimelineComponent,
		PagePricingComponent,
		PageInvoicesComponent,
		PageInvoicesV2Component,
		PageSearchResultsComponent,
		PageHelperClassComponent,
		PageTestimonialsComponent,
		PageFaqComponent,
		PageMaintananceComponent
	],
	imports: [
		CommonModule,
		NgbModule,
		RouterModule,
		NgxEchartsModule,
        CommonElementsModule,
        NgxGalleryModule
	],
	exports: []
})
export class PagesModule { }
