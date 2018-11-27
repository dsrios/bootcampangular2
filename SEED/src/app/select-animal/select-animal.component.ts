import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-animal',
  templateUrl: './select-animal.component.html',
  styleUrls: ['./select-animal.component.css']
})
export class SelectAnimalComponent implements OnInit {
  urlImage = '';

  constructor() {}

  ngOnInit() {}

  chooseAnimal( animal: string) {


    if (animal.toLowerCase() === 'cat') {
      // tslint:disable-next-line:max-line-length
      this.urlImage =
       'https://media2.giphy.com/media/x49DCuOOBiurrmlEov/200w.webp?cid=3640f6095bfdd08c68714b63492e66be';
    } else if (animal.toLowerCase() === 'dog') {
      // tslint:disable-next-line:max-line-length
      this.urlImage =
        'https://media0.giphy.com/media/nlmwU1uZgFGdq/200w.webp?cid=3640f6095bfdd0e5673330495107a7c9';
    } else {
      // tslint:disable-next-line:max-line-length
      this.urlImage =
        'https://media3.giphy.com/media/2dltnvoR8GRyf4VcrI/200w.webp?cid=3640f6095bfdd0ff66736d435967642a';
    }
  }
}
