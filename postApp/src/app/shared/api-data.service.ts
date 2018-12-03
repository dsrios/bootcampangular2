import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiDataService {

  constructor( private http: HttpClient) { }

  getListData( url: string) {
    return this.http.get(url);
  }

}
// • https://jsonplaceholder.typicode.com/posts
// * https://jsonplaceholder.typicode.com/comments
