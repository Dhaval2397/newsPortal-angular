import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../api-services.service';

@Component({
  selector: 'app-short-news',
  templateUrl: './short-news.component.html',
  styleUrl: './short-news.component.scss'
})
export class ShortNewsComponent implements OnInit{
  news_data_arr_1: any;
  news_data_arr_2: any;
  news_data_arr_3: any;
  news_data_arr_4: any;
  news_data_arr_5: any;
  news_data_arr_6: any;
  news_data_arr_7: any;
  news_data_arr_8: any;
  news_data_arr_9: any;
  news_data_arr_10: any;
  news_data_arr_11: any;
  news_data_arr_12: any;
  news_data_arr_13: any;
  news_data_arr_14: any;
  news_data_arr_15: any;
  news_data_arr_16: any;
  news_data_arr_17: any;
  news_data_arr_18: any;
  title!: string | null;
  constructor(private sport_data: ApiServicesService, 
    private news_data: ApiServicesService, 
    private bussiness_data: ApiServicesService, 
    private entertainment_data: ApiServicesService, 
    private technology_data: ApiServicesService, 
    private router: Router, 
    private elementRef: ElementRef, 
    private science_data:ApiServicesService, 
    private health_data:ApiServicesService){
      news_data.getnewsdata().subscribe((data: any) => {
        this.news_data_arr_1 = data.articles;
        this.news_data_arr_1 = this.news_data_arr_1.slice(1, 4);
        console.log(this.news_data_arr_1)
      });
      news_data.getnewsdata().subscribe((data: any) => {
        this.news_data_arr_2 = data.articles;
        this.news_data_arr_2 = this.news_data_arr_2.slice(4, 7);
      });
      news_data.getnewsdata().subscribe((data: any) => {
        this.news_data_arr_3 = data.articles;
        this.news_data_arr_3 = this.news_data_arr_3.slice(7, 10);
      });
      news_data.getnewsdata().subscribe((data: any) => {
        this.news_data_arr_4 = data.articles;
        this.news_data_arr_4 = this.news_data_arr_4.slice(10, 13);
        console.log(this.news_data_arr_1)
      });
      news_data.getnewsdata().subscribe((data: any) => {
        this.news_data_arr_5 = data.articles;
        this.news_data_arr_5 = this.news_data_arr_5.slice(13, 16);
      });
      news_data.getnewsdata().subscribe((data: any) => {
        this.news_data_arr_6 = data.articles;
        this.news_data_arr_6 = this.news_data_arr_6.slice(16, 19);
      });
      news_data.getnewsdata().subscribe((data: any) => {
        this.news_data_arr_7 = data.articles;
        this.news_data_arr_7 = this.news_data_arr_7.slice(17, 20);
        console.log(this.news_data_arr_4)
      });
      // news_data.getnewsdata().subscribe((data: any) => {
      //   this.news_data_arr_5 = data.articles;
      //   this.news_data_arr_5 = this.news_data_arr_5.slice(8, 11);
      // });
      // news_data.getnewsdata().subscribe((data: any) => {
      //   this.news_data_arr_6 = data.articles;
      //   this.news_data_arr_6 = this.news_data_arr_6.slice(11, 14);
      // });
      // news_data.getnewsdata().subscribe((data: any) => {
      //   this.news_data_arr_7 = data.articles;
      //   this.news_data_arr_7 = this.news_data_arr_7.slice(5, 8);
      //   console.log(this.news_data_arr_1)
      // });
      // news_data.getnewsdata().subscribe((data: any) => {
      //   this.news_data_arr_8 = data.articles;
      //   this.news_data_arr_8 = this.news_data_arr_8.slice(14, 17);
      // });
      // news_data.getnewsdata().subscribe((data: any) => {
      //   this.news_data_arr_9 = data.articles;
      //   this.news_data_arr_9 = this.news_data_arr_9.slice(2, 5);
      // });
      // news_data.getnewsdata().subscribe((data: any) => {
      //   this.news_data_arr_10 = data.articles;
      //   this.news_data_arr_10 = this.news_data_arr_10.slice(17, 20);
      //   console.log(this.news_data_arr_1)
      // });
      // news_data.getnewsdata().subscribe((data: any) => {
      //   this.news_data_arr_11 = data.articles;
      //   this.news_data_arr_11 = this.news_data_arr_11.slice(2, 5);
      // });
      // news_data.getnewsdata().subscribe((data: any) => {
      //   this.news_data_arr_12 = data.articles;
      //   this.news_data_arr_12 = this.news_data_arr_12.slice(5, 8);
      // });
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
      });}
}
