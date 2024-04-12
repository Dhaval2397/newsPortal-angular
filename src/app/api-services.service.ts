import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private sport_api: HttpClient, private news_api_1: HttpClient, private bussiness_api: HttpClient, private news_api_2: HttpClient, private entertaiment_api: HttpClient, private technology_api: HttpClient, private usnews_api: HttpClient, private uknews_api: HttpClient, private science_api:HttpClient, private health_api:HttpClient) { }
  getsportdata() {
    // return this.sport_api.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c9d63f32f5a547a38759337bba75acba');
    return this.sport_api.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=088e34a35b8742ceb592bfe1b924304d');
  }

  getnewsdata() {
    // return this.news_api_1.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c9d63f32f5a547a38759337bba75acba');
    return this.news_api_1.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=088e34a35b8742ceb592bfe1b924304d');
  }
  entertainmentdata() {
    // return this.entertaiment_api.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c9d63f32f5a547a38759337bba75acba');
    return this.entertaiment_api.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=088e34a35b8742ceb592bfe1b924304d');
    
  }
  getbussiness() {
    // return this.bussiness_api.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c9d63f32f5a547a38759337bba75acba');
    return this.bussiness_api.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=088e34a35b8742ceb592bfe1b924304d');
  }
  getechnology() {
    // return this.technology_api.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c9d63f32f5a547a38759337bba75acba');
    return this.technology_api.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=088e34a35b8742ceb592bfe1b924304d');
  }
  getusnews() {
    // return this.usnews_api.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c9d63f32f5a547a38759337bba75acba');
    return this.usnews_api.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=088e34a35b8742ceb592bfe1b924304d');
  }
  getuknews() {
    // return this.uknews_api.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=c9d63f32f5a547a38759337bba75acba');
    return this.uknews_api.get('https://newsapi.org/v2/top-headlines?country=gb&apiKey=088e34a35b8742ceb592bfe1b924304d');
  }
  getsciencedata(){
    return this.science_api.get('https://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=088e34a35b8742ceb592bfe1b924304d');
  }
  gethealthdata(){
    return this.health_api.get('https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=088e34a35b8742ceb592bfe1b924304d');
  }

}

