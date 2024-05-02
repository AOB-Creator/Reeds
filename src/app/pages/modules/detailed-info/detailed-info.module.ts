import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailedInfoRoutingModule } from './detailed-info-routing.module';
import { QrCodeModule } from 'ng-qrcode';
import { NgMagnizoomModule } from 'ng-magnizoom';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { PorductsOverviewComponent } from '../../../components/porducts-overview/porducts-overview.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetailedInfoRoutingModule,
   
  ]
})
export class DetailedInfoModule { }
