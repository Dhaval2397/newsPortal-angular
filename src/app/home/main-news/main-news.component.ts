import { Component, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiServicesService } from '../../api-services.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrl: './main-news.component.scss'
})
export class MainNewsComponent {
  name = 'Angular ' + VERSION.major;

  // images = [{ url: "https://www.livemint.com/lm-img/img/2024/03/05/600x338/UAE-POLITICS-SUMMIT-43_1709621340111_1709621364597.jpg", title: 'No Indian troops to remain in Maldives, not even in civilian clothing,’ says president Mohamed Muizzu' },
  // { url: "https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/INDIA-KASHMIR-MODI_1709771668888_1709771669405.JPG", title: 'Modi in Kashmir: Srinagar stadium draped in tricolour; Omar Abdullah"s big claim' },
  // { url: "https://static.toiimg.com/thumb/msid-108285130,imgsize-692167,width-400,height-225,resizemode-72/108285130.jpg", title: 'Bengaluru water crisis: Whitefield companies brace for impact, Peenya industries face production cut' },];
  news_data_arr_1: any;
  us_data_arr_1: any;
  uk_data_arr_1: any;
  internation_news_arr: any;
searchText: any;
  // router: any;

  constructor(config: NgbCarouselConfig, 
              private news_data: ApiServicesService, 
              private us_data: ApiServicesService, 
              private uk_data: ApiServicesService, 
              private router:Router) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.keyboard = true;
    config.pauseOnHover = true;
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_1 = data.articles;
      this.news_data_arr_1 = this.news_data_arr_1.slice(1, 5);
      // console.log(this.news_data_arr_1)
    });
    us_data.getusnews().subscribe((data: any) => {
      this.us_data_arr_1 = data.articles;
      this.us_data_arr_1 = this.us_data_arr_1.slice(3, 8);
      // console.log(this.news_data_arr_1)
    });
    uk_data.getuknews().subscribe((data: any) => {
      this.uk_data_arr_1 = data.articles;
      this.uk_data_arr_1 = this.uk_data_arr_1.slice(5, 9);
      console.log(this.uk_data_arr_1)
    });
    //  this.internation_news_arr=this.uk_data_arr_1.concat(this.us_data_arr_1);
  }
  data_of_news = [
    { url: "https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/radhika_merchant_anant_ambani_1709782298569_1709782298791.jpeg", title: 'Radhika Merchant addresses lavish pre-wedding bash, admits "it is aprivilege few people experience"' },
    { url: "https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/cushionless_seats_on_indigo_1709784355849_1709784367433.png", title: 'IndiGo passenger on Bengaluru-Bhopal flight stunned to find cushionless seats, airline says this...' },
    { url: "https://www.hindustantimes.com/ht-img/img/2024/03/06/550x309/India_Viral_Video_YouTube_Bill_Gates_1709719505896_1709719506233.jpg", title: 'Bill Gates reveals why it s "so inspiring" to visit India, shares beautiful video' },
    { url: "https://www.livemint.com/lm-img/img/2024/02/29/600x338/PTI02-29-2024-000049B-0_1709216340694_1709216389448.jpg", title: 'Who is Dolly Chaiwala? Internet sensation who earned praise from Bill Gates for his unique style of serving tea' }
  ];
  navigate_detial(news_title: any, desc: any, cont: any, src: any) {
    localStorage.setItem('news_title', news_title);
    localStorage.setItem('desc', desc);
    localStorage.setItem('cont', cont);
    localStorage.setItem('src', src);
    // localStorage.setItem('cat_title',cat_title);
    this.router.navigate(['/detail-page'])
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
