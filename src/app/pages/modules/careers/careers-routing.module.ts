import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from '../../careers/careers.component';

const routes: Routes = [
  {
    path: 'careers-with-us',
    component: CareersComponent,
    title: 'Карьера',
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }
