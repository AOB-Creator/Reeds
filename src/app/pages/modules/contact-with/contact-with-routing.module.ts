import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactWithUsComponent } from '../../contact-with-us/contact-with-us.component';

const routes: Routes = [
  {
    path: 'contact-with-us',
    component: ContactWithUsComponent,
    title: 'Contact',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactWithRoutingModule { }
