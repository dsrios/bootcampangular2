import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() image;
  @Output() imageClick = new EventEmitter();

  constructor() { }

  onImage( imageUrl ) {
    this.imageClick.emit(imageUrl);
  }

  ngOnInit() {
  }

}
