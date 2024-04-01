import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortNewsRoutingModule } from './short-news-routing.module';
import { FeaturedNewsComponent } from './featured-news/featured-news.component';
import { PopularNewsComponent } from './popular-news/popular-news.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';


@NgModule({
  declarations: [
    FeaturedNewsComponent,
    PopularNewsComponent,
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    ShortNewsRoutingModule
  ]
})
export class ShortNewsModule { }
