import { Info } from './info.interface';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.component.html',
  styleUrls: ['./peticion.component.css']
})
export class PeticionComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/todos/1';
  info: string;
  allInfo: Info;

  urlImage = 'https://yesno.wtf/api';
  imageShow: Observable<{image}>;

  constructor( private http: HttpClient) {

    // Peticion por subscribe
    const petition = this.http.get(this.url);
    petition.subscribe(
      (response: Info) => {
        this.allInfo = response;
        this.info = response.title;
      }
      );

      // peticion directa usando | async
      this.imageShow = this.http.get<{image}>(this.urlImage);

  }

  ngOnInit() {
  }

}
