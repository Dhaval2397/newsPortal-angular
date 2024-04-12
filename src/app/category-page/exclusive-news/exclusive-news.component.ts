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
    autoplay: true,
    margin: 10,
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
  img_data = [
    { src: "https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { src: "https://static.toiimg.com/thumb/msid-74014434,width-400,resizemode-4/74014434.jpg", title: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { src: "https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    { src: "https://static.toiimg.com/thumb/msid-74014434,width-400,resizemode-4/74014434.jpg", title: "Some quick example text to build on the card title and make up the bulk of the card's content." }
  ]
}
