import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = 'b3dfe586a96d4ad99fa1b216da72ecaf';
  constructor(private http: HttpClient) { }


  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }


  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }

  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }

}
