import { Component, OnInit } from '@angular/core';
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
  title:any|null ='';
  sport:any|null =false;
  bussines:any|null=false;
  entertainment: any=false;
  technology: any=false;
  sport_data_arr_1: any;
  sport_data_arr_2: any;
  news_data_arr_1:any;
  news_data_arr_2:any;
  news_data_arr_3:any;
  bussiness_data_arr_1:any;
  bussiness_data_arr_2:any;
  bussiness_data_arr_3:any;
  entertainment_data_arr_1:any;
  entertainment_data_arr_2:any;
  technology_data_arr_1:any;
  technology_data_arr_2:any;
  technology_data_arr_3:any;
  titleList: any;
  constructor(private sport_data:ApiServicesService, private news_data:ApiServicesService, bussiness_data:ApiServicesService, private entertainment_data:ApiServicesService, private technology_data:ApiServicesService, private router:Router) {
    sport_data.getsportdata().subscribe((data:any)=>{
      this.sport_data_arr_1=data.articles;
      this.sport_data_arr_1 = this.sport_data_arr_1.slice(1, 6);
      console.log(this.sport_data_arr_1);
    });
    sport_data.getsportdata().subscribe((data:any)=>{
      this.sport_data_arr_2=data.articles;
      this.sport_data_arr_2 = this.sport_data_arr_2.slice(7, 16);
    });
    news_data.getnewsdata().subscribe((data:any)=>{
      this.news_data_arr_1=data.articles;
      this.news_data_arr_1 = this.news_data_arr_1.slice(1, 6);
      console.log(this.news_data_arr_1)
    });
    news_data.getnewsdata().subscribe((data:any)=>{
      this.news_data_arr_2=data.articles;
      this.news_data_arr_2 = this.news_data_arr_2.slice(9, 15);
    });
    bussiness_data.getbussiness().subscribe((data:any)=>{
      this.bussiness_data_arr_1=data.articles;
      console.log(this.bussiness_data_arr_1)
      this.bussiness_data_arr_1 = this.bussiness_data_arr_1.slice(1, 6);
    });
    bussiness_data.getbussiness().subscribe((data:any)=>{
      this.bussiness_data_arr_2=data.articles;
      this.bussiness_data_arr_2 = this.bussiness_data_arr_2.slice(6, 15);
    });
    news_data.getnewsdata().subscribe((data:any)=>{
      this.news_data_arr_3=data.articles;
      this.news_data_arr_3 = this.news_data_arr_3.slice(15,21);
    });
    bussiness_data.getbussiness().subscribe((data:any)=>{
      this.bussiness_data_arr_3=data.articles;
      this.bussiness_data_arr_3 = this.bussiness_data_arr_3.slice(15,19);
    });
    entertainment_data.entertainmentdata().subscribe((data:any)=>{
      this.entertainment_data_arr_1=data.articles;
      this.entertainment_data_arr_1 = this.entertainment_data_arr_1.slice(0,5);
    });
    entertainment_data.entertainmentdata().subscribe((data:any)=>{
      this.entertainment_data_arr_2=data.articles;
      this.entertainment_data_arr_2 = this.entertainment_data_arr_2.slice(5,11);
    });
    technology_data.getechnology().subscribe((data:any)=>{
      this.technology_data_arr_1=data.articles;
      this.technology_data_arr_1 = this.technology_data_arr_1.slice(1,5);
    });
    technology_data.getechnology().subscribe((data:any)=>{
      this.technology_data_arr_2=data.articles;
      this.technology_data_arr_2 = this.technology_data_arr_2.slice(5,11);
    });
    technology_data.getechnology().subscribe((data:any)=>{
      this.technology_data_arr_3=data.articles;
      this.technology_data_arr_3 = this.technology_data_arr_3.slice(11,16);
    });
   }
   getDefaultTitle(title: string): string {
    return title ? title : 'Default Text';
  }

   customOptions: OwlOptions = {
     loop: true,
     margin:10,
     // autoHeight:false,
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
  
  
  ngOnInit(): void {
   
    this.title = localStorage.getItem('title');
    // console.log(this.title);
    // this.title= true;
    if(this.title=="Sport"){
      this.sport=true;
    }
    if(this.title=="Business"){
      this.bussines=true;
    }
    else if(this.title=="Entertainment"){
      this.entertainment=true;
    }
    else if(this.title=="Technology"){
      this.technology=true;
    }
  }
  // constructor(sport_data:ApiServicesService ) {
    //   sport_data.getsportdata().subscribe((data)=>this.sport_data_arr=data);
    // }
     trending_data=[
      {src:"https://www.livemint.com/lm-img/img/2024/03/05/600x338/UAE-POLITICS-SUMMIT-43_1709621340111_1709621364597.jpg", title:"No Indian troops to remain in Maldives, not even in civilian clothing,’ says president Mohamed Muizzu"},
      {src:"https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/INDIA-KASHMIR-MODI_1709771668888_1709771669405.JPG", title:"Modi in Kashmir: Srinagar stadium draped in tricolour; Omar Abdullah's big claim "},
      {src:"https://static.toiimg.com/thumb/msid-108285130,imgsize-692167,width-400,height-225,resizemode-72/108285130.jpg", title:"Bengaluru water crisis: Whitefield companies brace for impact, Peenya industries face production cut"},
     ]
     detail_list_data=[
      {src:"https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
      {src:"https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
      {src:"https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
      {src:"https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
      {src:"https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
      {src:"https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title:"Some quick example text to build on the card title and make up the bulk of the card's content."},
     ]
     exclusive_news_data=[
      {src:"https://www.livemint.com/lm-img/img/2024/03/05/600x338/UAE-POLITICS-SUMMIT-43_1709621340111_1709621364597.jpg", title:"No Indian troops to remain in Maldives, not even in civilian clothing,’ says president Mohamed Muizzu"},
      {src:"https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/INDIA-KASHMIR-MODI_1709771668888_1709771669405.JPG", title:"Modi in Kashmir: Srinagar stadium draped in tricolour; Omar Abdullah's big claim "},
      {src:"https://static.toiimg.com/thumb/msid-108285130,imgsize-692167,width-400,height-225,resizemode-72/108285130.jpg", title:"Bengaluru water crisis: Whitefield companies brace for impact, Peenya industries face production cut"},
    ]
    more_news_data = [
      {
        part: "left", img_src: [{ src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
        { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
        { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." },  
        { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
        // { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }
      ]
      
    },
      {
        part: "right", img_src: [{ src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
        { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
                                { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." },  
                                { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }, 
                                // { src: "https://miro.medium.com/v2/resize:fit:800/1*Bl6HcbZYF77-i8fjUMSWAw.jpeg", title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis." }
                              ]
                            }
    ]
    
     navigate(news_title:any, desc:any, cont:any, src:any, cat_title:any){
      localStorage.setItem('news_title',news_title);
      localStorage.setItem('desc',desc);
      localStorage.setItem('cont',cont);
      localStorage.setItem('src',src);
      localStorage.setItem('cat_title',cat_title);
      this.router.navigate(['/detail-page'])
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
 });
     }
    
  }
  
  