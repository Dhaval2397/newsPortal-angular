import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // $("#myTab li:eq(0) a").tab("show");
  // $("#mytab li:eq(0) a").tab("show");
  category_list=[
    {title:"Sport", images:["https://images.indianexpress.com/2024/03/ashwin-100th-test.jpg?w=640", "https://static.toiimg.com/thumb/msid-74014434,width-400,resizemode-4/74014434.jpg"]},
    {title:"Business", images:["https://static-assets.business.amazon.com/assets/in/17th-aug-2022/910_AB_Website_Cover_1450x664_03.jpg.transform/1450x664/image.jpg", "https://imageio.forbes.com/specials-images/imageserve/633a774a842d06ecd68286ff/The-5-Biggest-Business-Trends-For-2023/960x0.jpg?height=430&width=711&fit=bounds"]},
    {title:"Entertainment", images:["https://i.ytimg.com/vi/GkIKfejYlxo/maxresdefault.jpg", "https://images.indianexpress.com/2022/04/alia-ranbir-ajay-devgn-runway-34-trailer-KGF-release-1200.jpg?w=414"]},
    {title:"Technology", images:["https://contentstatic.techgig.com/photo/87503372/techgig-daily-tech-news-digest-03-november.jpg?1189006", "https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2021/02/Brad-Blog-Aus-Header-scaled.jpg"]}
  ]
}
