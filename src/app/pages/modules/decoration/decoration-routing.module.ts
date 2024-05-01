import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoorationComponent } from '../../decooration/decooration.component';

const routes: Routes = [
  {
    path: 'decoration-showroom',
    component: DecoorationComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecorationRoutingModule { }
