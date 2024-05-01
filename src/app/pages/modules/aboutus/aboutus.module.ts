import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutStepsComponent } from '../../../components/about-steps/about-steps.component';
import { StackedListComponent } from '../../../components/stacked-list/stacked-list.component';
import { NewsAboutUsComponent } from '../../../components/news-about-us/news-about-us.component';
import { TestimonialsComponent } from '../../../components/testimonials/testimonials.component';
import { AboutusComponent } from '../../aboutus/aboutus.component';


@NgModule({
  declarations: [
    // AboutStepsComponent, 
    // StackedListComponent, 
    // NewsAboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ],
  exports: [
    // AboutStepsComponent,
    // StackedListComponent, 
    // NewsAboutUsComponent
  ]
})
export class AboutusModule { }
