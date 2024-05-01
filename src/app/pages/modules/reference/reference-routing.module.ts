import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferenceComponent } from '../../reference/reference.component';

const routes: Routes = [
  {
    path: 'references',
    component: ReferenceComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule { }
