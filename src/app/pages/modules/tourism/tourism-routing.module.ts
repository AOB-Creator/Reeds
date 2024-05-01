import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourismComponent } from '../../tourism/tourism.component';

const routes: Routes = [
  {
    path: 'tourism-development-in-moynak',
    component: TourismComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourismRoutingModule { }
