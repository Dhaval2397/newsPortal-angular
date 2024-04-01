import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopNewsComponent } from './top-news/top-news.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { ShortNewsComponent } from './short-news/short-news.component';
import { MainNewsComponent } from './main-news/main-news.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
