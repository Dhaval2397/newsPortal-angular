import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopNewsComponent } from './home/top-news/top-news.component';
import { NewsCategoryComponent } from './home/news-category/news-category.component';
import { ShortNewsComponent } from './home/short-news/short-news.component';
import { MainNewsComponent } from './home/main-news/main-news.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent, 
    TopNewsComponent,
    NewsCategoryComponent,
    ShortNewsComponent,
    MainNewsComponent,
    CategoryPageComponent,
    DetailPageComponent,
    CategoryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    HttpClientModule,
    RouterModule.forRoot([

      {
        path:'detail-page',
        component:DetailPageComponent
      }

  ], {

      onSameUrlNavigation: 'reload'

  })

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
