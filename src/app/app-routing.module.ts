import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FeaturedNewsComponent } from './home/short-news/featured-news/featured-news.component';
import { LatestNewsComponent } from './home/short-news/latest-news/latest-news.component';
import { PopularNewsComponent } from './home/short-news/popular-news/popular-news.component';

const routes: Routes = [
  {
    path:'category-news',
    component:CategoryPageComponent,
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
    children:[
      {
        path:'',
        component:FeaturedNewsComponent,
      },
      {
        path:'latest-news',
        component:LatestNewsComponent,
      },
      {
        path:'popular-news',
        component:PopularNewsComponent,
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
