import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private sport_api: HttpClient, private news_api_1: HttpClient, private bussiness_api: HttpClient, private news_api_2: HttpClient, private entertaiment_api: HttpClient, private technology_api: HttpClient, private usnews_api: HttpClient, private uknews_api: HttpClient) { }
  getsportdata() {
    return this.sport_api.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c9d63f32f5a547a38759337bba75acba');
    // return this.sport_api.get('https://newsdata.io/api/1/news?apikey=pub_41456908e6d0385e0144ded3b55c9001a3e95&q=sport%20news%20india&country=in&language=en&category=sports ');
  }

  getnewsdata() {
    return this.news_api_1.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c9d63f32f5a547a38759337bba75acba');
  }
  entertainmentdata() {
    return this.entertaiment_api.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c9d63f32f5a547a38759337bba75acba');
  }
  getbussiness() {
    return this.bussiness_api.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c9d63f32f5a547a38759337bba75acba');
  }
  getechnology() {
    return this.technology_api.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c9d63f32f5a547a38759337bba75acba');
  }
  getusnews() {
    return this.usnews_api.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c9d63f32f5a547a38759337bba75acba');
  }
  getuknews() {
    return this.uknews_api.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=c9d63f32f5a547a38759337bba75acba');
  }

}

