import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }
  // newsApiUrl="https://newsapi.org/v2/top-headlines?q=india&apiKey=9f3897b595b840cf95699f08aa490227";
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=9f3897b595b840cf95699f08aa490227";
  // newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=9f3897b595b840cf95699f08aa490227";
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9f3897b595b840cf95699f08aa490227";
  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9f3897b595b840cf95699f08aa490227";

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}
