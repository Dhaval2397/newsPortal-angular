import { Component } from '@angular/core';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrl: './more-news.component.scss'
})
export class MoreNewsComponent {
  img_data = [
    {
      part: "left", img_src: [{ src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
                              { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
                              { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." },  
                              { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
                              { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }]

    },
    {
      part: "right", img_src: [{ src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
                              { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
                              { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." },  
                              { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
                              { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }]
    }
  ]
}
