import { Component, ElementRef, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { ApiServicesService } from '../api-services.service';
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent implements OnInit {
  [x: string]: any;
  title: any | null = '';
  sport_data_arr_1: any;
  sport_data_arr_2: any;
  news_data_arr_1: any;
  news_data_arr_2: any;
  news_data_arr_3: any;
  bussiness_data_arr_1: any;
  bussiness_data_arr_2: any;
  bussiness_data_arr_3: any;
  entertainment_data_arr_1: any;
  entertainment_data_arr_2: any;
  technology_data_arr_1: any;
  technology_data_arr_2: any;
  technology_data_arr_3: any;
  titleList: any;
  science_data_arr_1:any;
  science_data_arr_2:any;
  science_data_arr_3:any;
  health_data_arr_1:any;
  health_data_arr_2:any;
  health_data_arr_3:any;
  constructor(private sport_data: ApiServicesService, private news_data: ApiServicesService, bussiness_data: ApiServicesService, private entertainment_data: ApiServicesService, private technology_data: ApiServicesService, private router: Router, private elementRef: ElementRef, private science_data:ApiServicesService, private health_data:ApiServicesService) {
    sport_data.getsportdata().subscribe((data: any) => {
      this.sport_data_arr_1 = data.articles;
      this.sport_data_arr_1 = this.sport_data_arr_1.slice(1, 6);
      console.log(this.sport_data_arr_1);
    });
    sport_data.getsportdata().subscribe((data: any) => {
      this.sport_data_arr_2 = data.articles;
      this.sport_data_arr_2 = this.sport_data_arr_2.slice(7, 16);
    });
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_1 = data.articles;
      this.news_data_arr_1 = this.news_data_arr_1.slice(1, 6);
      console.log(this.news_data_arr_1)
    });
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_2 = data.articles;
      this.news_data_arr_2 = this.news_data_arr_2.slice(9, 15);
    });
    bussiness_data.getbussiness().subscribe((data: any) => {
      this.bussiness_data_arr_1 = data.articles;
      console.log(this.bussiness_data_arr_1)
      this.bussiness_data_arr_1 = this.bussiness_data_arr_1.slice(1, 6);
    });
    bussiness_data.getbussiness().subscribe((data: any) => {
      this.bussiness_data_arr_2 = data.articles;
      this.bussiness_data_arr_2 = this.bussiness_data_arr_2.slice(6, 15);
    });
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_3 = data.articles;
      this.news_data_arr_3 = this.news_data_arr_3.slice(15, 21);
    });
    bussiness_data.getbussiness().subscribe((data: any) => {
      this.bussiness_data_arr_3 = data.articles;
      this.bussiness_data_arr_3 = this.bussiness_data_arr_3.slice(15, 19);
    });
    entertainment_data.entertainmentdata().subscribe((data: any) => {
      this.entertainment_data_arr_1 = data.articles;
      this.entertainment_data_arr_1 = this.entertainment_data_arr_1.slice(0, 5);
    });
    entertainment_data.entertainmentdata().subscribe((data: any) => {
      this.entertainment_data_arr_2 = data.articles;
      this.entertainment_data_arr_2 = this.entertainment_data_arr_2.slice(5, 11);
    });
    technology_data.getechnology().subscribe((data: any) => {
      this.technology_data_arr_1 = data.articles;
      this.technology_data_arr_1 = this.technology_data_arr_1.slice(1, 5);
    });
    technology_data.getechnology().subscribe((data: any) => {
      this.technology_data_arr_2 = data.articles;
      this.technology_data_arr_2 = this.technology_data_arr_2.slice(5, 11);
    });
    technology_data.getechnology().subscribe((data: any) => {
      this.technology_data_arr_3 = data.articles;
      this.technology_data_arr_3 = this.technology_data_arr_3.slice(11, 16);
    });
    science_data.getsciencedata().subscribe((data: any) => {
      this.science_data_arr_1 = data.articles;
      this.science_data_arr_1 = this.science_data_arr_1.slice(1, 5);
    });
    science_data.getsciencedata().subscribe((data: any) => {
      this.science_data_arr_2 = data.articles;
      this.science_data_arr_2 = this.science_data_arr_2.slice(5, 16);
    });
    science_data.getsciencedata().subscribe((data: any) => {
      this.science_data_arr_3 = data.articles;
      this.science_data_arr_3 = this.science_data_arr_3.slice(16, 20);
    });
    health_data.gethealthdata().subscribe((data: any) => {
      this.health_data_arr_1 = data.articles;
      this.health_data_arr_1 = this.health_data_arr_1.slice(5, 9);
    });
    health_data.gethealthdata().subscribe((data: any) => {
      this.health_data_arr_2 = data.articles;
      this.health_data_arr_2 = this.health_data_arr_2.slice(9, 15);
    });
    health_data.gethealthdata().subscribe((data: any) => {
      this.health_data_arr_3 = data.articles;
      this.health_data_arr_3 = this.health_data_arr_3.slice(15, 21);
    });
  }
  getDefaultTitle(title: string): string {
    return title ? title : 'Default Text';
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: false
  }
  navigateCategory() {
    this.title = localStorage.getItem('title');
  }

  ngOnInit(): void {
    this.navigateCategory();
  }
  navigate_detial(news_title: any, desc: any, cont: any, src: any, cat_title: any) {
    localStorage.setItem('news_title', news_title);
    localStorage.setItem('desc', desc);
    localStorage.setItem('cont', cont);
    localStorage.setItem('src', src);
    localStorage.setItem('cat_title', cat_title);
    this.router.navigate(['/detail-page'])
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  categories = [
    'Sport', 'Entertainment', 'Business', 'Science', 'Technology', 'Bollywood', 'Politic', 'Education', 'Web Series',
    'Health & Wellness', 'Prices', 'Currencies', 'Lifestyle', 'Trending',
    'Food', 'Robotics', 'Art & Craft', 'Arcitructure', 'Defence'];
  showPrevButton = false;
  showNextButton = true;
  scrollAmount = 200;  
  onScroll(event: Event) {
    const container = this.elementRef.nativeElement.querySelector('.category-list-wrapper');
    this.showPrevButton = container.scrollLeft > 0;
    this.showNextButton = container.scrollLeft + container.clientWidth < container.scrollWidth;
  }

  scrollLeft() {
    const container = this.elementRef.nativeElement.querySelector('.category-list-wrapper');
    container.scrollTo({ left: container.scrollLeft - this.scrollAmount, behavior: 'smooth' });
  }

  scrollRight() {
    const container = this.elementRef.nativeElement.querySelector('.category-list-wrapper');
    container.scrollTo({ left: container.scrollLeft + this.scrollAmount, behavior: 'smooth' });
  }
  navigate(data: any) {
    localStorage.setItem('title', data);
    this.navigateCategory();
    this.router.navigate(['/category', data.toLowerCase().replace(/\s+/g, '-')]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}

