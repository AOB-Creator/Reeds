import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecorationRoutingModule } from './decoration-routing.module';
import { SliderDekorComponent } from '../../../components/slider-dekor/slider-dekor.component';
import { TestComponent } from '../../../components/test/test.component';
import { DecoorationComponent } from '../../decooration/decooration.component';


@NgModule({
  declarations: [
    // SliderDekorComponent
  ],
  imports: [
    CommonModule,
    DecorationRoutingModule
  ],
  exports: [
    // SliderDekorComponent
  ]
})
export class DecorationModule { }
