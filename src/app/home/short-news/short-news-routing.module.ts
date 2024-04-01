import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedNewsComponent } from './featured-news/featured-news.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PopularNewsComponent } from './popular-news/popular-news.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortNewsRoutingModule { }
