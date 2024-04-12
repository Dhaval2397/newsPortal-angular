import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';

@Component({
  selector: 'app-trending-news',
  templateUrl: './trending-news.component.html',
  styleUrl: './trending-news.component.scss'
})
export class TrendingNewsComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
   
   
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

  img_data=[
    {src:"https://www.livemint.com/lm-img/img/2024/03/05/600x338/UAE-POLITICS-SUMMIT-43_1709621340111_1709621364597.jpg", title:"No Indian troops to remain in Maldives, not even in civilian clothing,’ says president Mohamed Muizzu"},
    {src:"https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/INDIA-KASHMIR-MODI_1709771668888_1709771669405.JPG", title:"Modi in Kashmir: Srinagar stadium draped in tricolour; Omar Abdullah's big claim "},
    {src:"https://static.toiimg.com/thumb/msid-108285130,imgsize-692167,width-400,height-225,resizemode-72/108285130.jpg", title:"Bengaluru water crisis: Whitefield companies brace for impact, Peenya industries face production cut"},
   ]
}
