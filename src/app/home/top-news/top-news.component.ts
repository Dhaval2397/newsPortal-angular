import { Component } from '@angular/core';
import { ApiServicesService } from '../../api-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrl: './top-news.component.scss'
})
export class TopNewsComponent {
  news_data_arr_3: any;
  news_data_arr_2: any;
  constructor(private news_data: ApiServicesService, private router:Router) {
    news_data.getnewsdata().subscribe((data: any) => {
      this.news_data_arr_3 = data.articles;
      this.news_data_arr_3 = this.news_data_arr_3.slice(5, 17);
    });
    news_data.getnewsdata().subscribe((data:any)=>{
      this.news_data_arr_2=data.articles;
      this.news_data_arr_2 = this.news_data_arr_2.slice(9, 15);
    });
  }

  data_of_news = [
    { url: "https://static.toiimg.com/thumb/msid-108268958,imgsize-1515286,width-400,resizemode-4/108268958.jpg", title: 'Nikki Haley to exit US Republican presidential race: Report' },
    { url: "https://images.indianexpress.com/2024/03/IOC-1.jpg?w=640", title: 'Grand Prix dreams: IOC to make Formula 1 fuel, pitch it to top racing teams' },
    { url: "https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/Delhi-chief-minister-Arvind-Kejriwal-listens-to-fi_1709576383373_1709786461047.jpg", title: 'Delhi excise policy case: Court summons CM Arvind Kejriwal on March 16 after ED move' },
    { url: "https://www.hindustantimes.com/ht-img/img/2024/03/07/550x309/PTI02-29-2024-000135B-0_1709262441150_1709769613043.jpg", title: 'Narendra Modi in Kashmir LIVE updates: PM to participate in ‘Viksit Bharat Viksit J&K’;' },
    { url: "https://www.hindustantimes.com/ht-img/img/2024/03/05/550x309/GN-Saibaba--has-been-serving-a-life-term-in-Nagpur_1709622610408.jpg", title: 'Bombay HC acquits GN Saibaba, five others in alleged Maoist links case' },
    { url: "https://images.indianexpress.com/2024/03/Byjus-1.jpg?w=640", title: 'Explained: The rise and fall of Byju’s' },
    { url: "https://www.hrw.org/sites/default/files/styles/embed_xxl/public/media_2023/11/202311eca_russia_lgbt.jpg?itok=q0PoaRBU", title: 'Russia: Supreme Court Bans “LGBT Movement” as “Extremist”' },
    { url: "https://images.indianexpress.com/2024/03/Rili.ai_.jpg?w=640", title: 'Rili.ai: World’s first AI-powered social network aims to combat loneliness' },
    { url: "https://images.indianexpress.com/2024/03/jay-shetty.jpg?w=640", title: 'Jay Shetty lied about time spent with monks in India, plagiarised people’s stories: Report' },
    { url: "https://images.indianexpress.com/2024/03/arrest1_253389.jpeg?w=640", title: 'Uttarakhand: Journalist arrested,DGP says agenda aims to sow anarchy' },
    { url: "https://images.indianexpress.com/2024/03/artificial-intelligence.jpg?w=640", title: 'Ex-Google software engineer charged with stealing AI technology while working with Chinese companies' },
    {
      url: "https://images.indianexpress.com/2024/03/Untitled-design-62.jpg?w=640", title: 'Ban on Paytm Payment Bank:85% of Paytm wallet users unlikely to be impacted, says RBI Governor Das'
    },
  ];
  useful_news = [
    {
      link: "Lok Sabha Election 2024 Campaign Live Updates: 'Storm from Sandeshkhali will reach every part of West Bengal,' says PM Modi, meets women from violence-hit area"
    },
    {
      link: "Aadhaar seeding with voter ID: EC wants law amended to clarify it’s voluntary"
    },
    {
      link: "Court asks Kejriwal to appear before it on March 16 after he skips ED summons"
    },
    {
      link: "Today in Politics: All eyes on PM Modi’s Kashmir rally, first since Article 370 abrogation; BJP-BJD tie-up set to be sealed"
    },
    {
      link: "Court cites Yogi example: ‘Religious persons should hold posts of power’"
    },
    {
      link: "Devdutt Padikkal: From being in & out of hospital in 2022 to making his Test debut"
    },
    {
      link: "Laapataa Ladies: Of lost women and women we lose every day"
    }
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
