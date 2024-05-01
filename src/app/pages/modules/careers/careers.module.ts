import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareerApthwayComponent } from '../../../components/career-apthway/career-apthway.component';
import { HeaderSectionsComponent } from '../../../components/header-sections/header-sections.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CareersRoutingModule
  ],
  exports: []
})
export class CareersModule { }
