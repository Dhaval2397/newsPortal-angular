import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent implements OnInit {
  title: any | null;
  src: any | null;
  desc: any | null;
  cont: any | null
  news_data_arr_1: any;
  news_data_arr_2: any;
  news_data_arr_3: any;
  urlToImage: any;
  news_data_arr_4: any;
  news_data_arr_5: any;
  news_data_arr_6: any;
  // img: any;
  constructor(private sport_data: ApiServicesService, private news_data: ApiServicesService, bussiness_data: ApiServicesService, private entertainment_data: ApiServicesService, private technology_data: ApiServicesService, private router: Router) {
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_1 = data.articles;
      this.news_data_arr_1 = this.news_data_arr_1.slice(1, 3);
      console.log(this.news_data_arr_1)
    });
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_2 = data.articles;
      this.news_data_arr_2 = this.news_data_arr_2.slice(9, 15);
    });
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_3 = data.articles;
      this.news_data_arr_3 = this.news_data_arr_3.slice(16, 17);
    });
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_4 = data.articles;
      this.news_data_arr_4 = this.news_data_arr_4.slice(8, 9);
    });
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_5 = data.articles;
      this.news_data_arr_5 = this.news_data_arr_5.slice(7, 8);
    });
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_6 = data.articles;
      this.news_data_arr_6 = this.news_data_arr_6.slice(4, 5);
    });
    // if(this.urlToImage== null){
    //   this.src="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=";
    // }
  }

  navigate(news_title: any, desc: any, cont: any, src: any) {
    localStorage.setItem('news_title', news_title);
    localStorage.setItem('desc', desc);
    localStorage.setItem('cont', cont);
    localStorage.setItem('src', src);

    this.getPostData();

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'

    });
  }

  getPostData(){
    this.title = localStorage.getItem('news_title');
    this.src = localStorage.getItem('src');
    this.desc = localStorage.getItem('desc')
    this.cont = localStorage.getItem('cont')
    if (this.src == "null") {
      this.src = "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM="
    }
  }
  
  ngOnInit(): void {
    this.getPostData();
  }
}
