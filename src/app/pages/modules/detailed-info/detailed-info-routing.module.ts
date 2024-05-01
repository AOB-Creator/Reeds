import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInformationComponent } from '../../detailed-information/detailed-information.component';

const routes: Routes = [
  {
    path: 'products/detailed-info/:id',
    component: DetailedInformationComponent,
    title: 'Detailed Information',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailedInfoRoutingModule { }
