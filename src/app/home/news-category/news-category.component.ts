import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiServicesService } from '../../api-services.service';

@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrl: './news-category.component.scss'
})
export class NewsCategoryComponent {
  x: any;
  sport_data_arr_1: any;
  bussiness_data_arr_1: any;
  entertainment_data_arr_1: any;
  technology_data_arr_1: any;
  constructor(confi: NgbCarouselConfig, 
              private router:Router, 
              private sport_data:ApiServicesService, 
              private bussiness_data:ApiServicesService, 
              private entertainment_data:ApiServicesService, 
              private technology_data:ApiServicesService) {
    // customize default values of carousels used by this component tree
    confi.interval = 0;
    confi.keyboard = true;
    confi.pauseOnHover = true;
    sport_data.getsportdata().subscribe((data:any)=>{
      this.sport_data_arr_1=data.articles;
      this.sport_data_arr_1 = this.sport_data_arr_1.slice(1, 6);
      console.log(this.sport_data_arr_1);
    });
    bussiness_data.getbussiness().subscribe((data:any)=>{
      this.bussiness_data_arr_1=data.articles;
      this.bussiness_data_arr_1 = this.bussiness_data_arr_1.slice(1, 6);
      // console.log(this.bussiness_data_arr_1)
    });
    entertainment_data.entertainmentdata().subscribe((data:any)=>{
      this.entertainment_data_arr_1=data.articles;
      this.entertainment_data_arr_1 = this.entertainment_data_arr_1.slice(0,5);
    });
    technology_data.getechnology().subscribe((data:any)=>{
      this.technology_data_arr_1=data.articles;
      this.technology_data_arr_1 = this.technology_data_arr_1.slice(6,10);
    });
  }
  @Input() item: { title: string, images: any } = { title: "", images: "" }
  // category_list = [
  //   {
  //     title: "Sport", images: [{ src: "https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", title: "Some quick example text to build on the card title and make up the bulk of the card's content." },
  //     { src: "https://static.toiimg.com/thumb/msid-74014434,width-400,resizemode-4/74014434.jpg", title: "Some quick example text to build on the card title and make up the bulk of the card's content." }]
  //   },
  //   {
  //     title: "Business", images: [{ src: "https://static-assets.business.amazon.com/assets/in/17th-aug-2022/910_AB_Website_Cover_1450x664_03.jpg.transform/1450x664/image.jpg", title: "Some quick example text to build on the card title and make up the bulk of the card's content." },
  //     { src: "https://imageio.forbes.com/specials-images/imageserve/633a774a842d06ecd68286ff/The-5-Biggest-Business-Trends-For-2023/960x0.jpg?height=430&width=711&fit=bounds", title: "Some quick example text to build on the card title and make up the bulk of the card's content." }]
  //   },
  //   {
  //     title: "Entertainment", images: [{ src: "https://i.ytimg.com/vi/GkIKfejYlxo/maxresdefault.jpg", title: "Some quick example text to build on the card title and make up the bulk of the card's content." },
  //     { src: "https://images.indianexpress.com/2022/04/alia-ranbir-ajay-devgn-runway-34-trailer-KGF-release-1200.jpg?w=414", title: "Some quick example text to build on the card title and make up the bulk of the card's content." }]
  //   },
  //   {
  //     title: "Technology", images: [{ src: "https://contentstatic.techgig.com/photo/87503372/techgig-daily-tech-news-digest-03-november.jpg?1189006", title: "Some quick example text to build on the card title and make up the bulk of the card's content." },
  //     { src: "https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2021/02/Brad-Blog-Aus-Header-scaled.jpg", title: "Some quick example text to build on the card title and make up the bulk of the card's content." }]
  //   }
  // ]
  navigate(data:any){
    // console.log('yha aaya hai');
    localStorage.setItem('title',data);
    this.router.navigate(['/category', data.toLowerCase().replace(/\s+/g, '-')]);
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
  navigate_detial(news_title:any, desc:any, cont:any, src:any){
    localStorage.setItem('news_title',news_title);
    localStorage.setItem('desc',desc);
    localStorage.setItem('cont',cont);
    localStorage.setItem('src',src);
    // localStorage.setItem('cat_title',cat_title);
    this.router.navigate(['/detail-page'])
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
   }
}
