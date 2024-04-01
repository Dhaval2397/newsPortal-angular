import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';

@Component({
  selector: 'app-exclusive-news',
  templateUrl: './exclusive-news.component.html',
  styleUrl: './exclusive-news.component.scss'
})
export class ExclusiveNewsComponent {
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

}
