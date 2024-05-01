import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactWithRoutingModule } from './contact-with-routing.module';
import { ContactWithUsComponent } from '../../contact-with-us/contact-with-us.component';
import { SubscribeOurLetterComponent } from '../../../components/subscribe-our-letter/subscribe-our-letter.component';
import { ContactSectionComponent } from '../../../components/contact-section/contact-section.component';


@NgModule({
  declarations: [ 
    // ContactWithUsComponent, 
    // SubscribeOurLetterComponent, 
    // ContactSectionComponent 
  ],
  imports: [
    CommonModule,
    ContactWithRoutingModule
  ],
  exports: [
    // ContactWithUsComponent, 
    // SubscribeOurLetterComponent, 
    // ContactSectionComponent
  ]
})
export class ContactWithModule { }
