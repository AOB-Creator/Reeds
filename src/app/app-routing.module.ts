import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { TourismComponent } from './pages/tourism/tourism.component';
import { CareersComponent } from './pages/careers/careers.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Moynak LDSP',
  },
  {
    path: '',
    loadChildren: ()=>import('./pages/modules/aboutus/aboutus.module').then((m)=>m.AboutusModule),
    title: 'Moynak LDSP'
  },
  {
    path: '',
    loadChildren: ()=>import('./pages/modules/decoration/decoration.module').then((d)=>d.DecorationModule),
    title: 'Moynak LDSP'
  },
  {
    path: '',
    loadChildren: ()=>import('./pages/modules/products/products.module').then((p)=>p.ProductsModule),
    title: 'Moynak LDSP'
  },
  {
    path: '',
    loadChildren: ()=>import('./pages/modules/reference/reference.module').then((r)=> r.ReferenceModule),
    title: 'Moynak LDSP'
  },
  {
    path: 'tourism-development-in-moynak',
    loadChildren: ()=> import('./pages/modules/tourism/tourism.module').then((m) => m.TourismModule),
    title: 'Moynak LDSP'
  },
  {
    path: '',
    loadChildren: ()=>import('./pages/modules/careers/careers.module').then((c) => c.CareersModule),
    title: 'Карьера'
  },
  {
    path: '',
    loadChildren: ()=> import('./pages/modules/contact-with/contact-with.module').then((c) => c.ContactWithModule),
    title: 'Contact',
  },
  {
   path:'',
   loadChildren: ()=>import('./pages/modules/detailed-info/detailed-info.module').then((m)=>m.DetailedInfoModule),
   title: 'Toliq malumotlar'
  },
  {
    path: '**',
    component: Page404Component,
    title: 'Moynak LDSP',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
