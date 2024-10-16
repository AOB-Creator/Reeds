import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../../aboutus/aboutus.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutusComponent,
    title: 'О нас'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
