import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
const routes: Routes = [
  {
    path:'category/:title',
    component:CategoryPageComponent,
  },
  {
    path:'adminPage',
    component:AdminPanelComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'detail-page',
    component:DetailPageComponent,
  },
  {
    path:'admin',
    component:AdminPanelComponent
  },
  {
    path:'adminLogin',
    component:AdminLoginComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
