import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor() { }


  getData( url: string) {
    return url + 'Para renderizar imagen';
  }
}
