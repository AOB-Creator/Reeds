import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { Page404Component } from './pages/page404/page404.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { ContactWithUsComponent } from './pages/contact-with-us/contact-with-us.component';
import { CareersComponent } from './pages/careers/careers.component';
import { DecoorationComponent } from './pages/decooration/decooration.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Moynak LDSP',
  },
  {
    path: 'about-us',
    component: AboutusComponent,
    title: 'Moynak LDSP',
  },
  {
    path: 'decoration-showroom',
    component: DecoorationComponent,
    children: [],
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [],
  },
  {
    path: 'careers-with-us',
    component: CareersComponent,
    children: [],
  },
  {
    path: 'products/detailed-info/:id',
    component: DetailedInformationComponent,
    title: 'Detailed Information',
  },
  {
    path: 'contact-with-us',
    component: ContactWithUsComponent,
    title: 'Contact',
  },
  // {
  //   path: '**',
  //   component: Page404Component,
  //   title: 'Moynak LDSP',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
