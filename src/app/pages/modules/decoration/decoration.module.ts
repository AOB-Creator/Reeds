import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecorationRoutingModule } from './decoration-routing.module';
import { SliderDekorComponent } from '../../../components/slider-dekor/slider-dekor.component';
import { TestComponent } from '../../../components/test/test.component';
import { DecoorationComponent } from '../../decooration/decooration.component';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { DecorCardsComponent } from '../../../components/decor-cards/decor-cards.component';


@NgModule({
  declarations: [
    // SliderDekorComponent
    
  ],
  imports: [
    CommonModule,
    DecorationRoutingModule,
    ClipboardModule, 
    FormsModule    
  ],
  exports: [
    // SliderDekorComponent
  ]
})
export class DecorationModule { }
