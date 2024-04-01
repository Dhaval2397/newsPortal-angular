import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPageRoutingModule } from './category-page-routing.module';
import { TrendingNewsComponent } from './trending-news/trending-news.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { ExclusiveNewsComponent } from './exclusive-news/exclusive-news.component';
import { MoreNewsComponent } from './more-news/more-news.component';


@NgModule({
  declarations: [
    TrendingNewsComponent,
    DetailListComponent,
    ExclusiveNewsComponent,
    // MoreNewsComponent
  ],
  imports: [
    CommonModule,
    CategoryPageRoutingModule
  ]
})
export class CategoryPageModule { }
