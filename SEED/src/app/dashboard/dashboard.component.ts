import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  textEmoji = '';
  imageRender;

  imageUrls = [
    'https://media1.giphy.com/media/GWx7HFtKBAV3O/200w.webp?cid=3640f6095bfddeed6d6f577959d32263',
    'https://media3.giphy.com/media/xAFIrLYSDMUa4/200w.webp?cid=3640f6095bfddeed6d6f577959d32263',
    'https://media2.giphy.com/media/33zX3zllJBGY8/200.webp?cid=3640f6095bfddeed6d6f577959d32263',
    'https://media2.giphy.com/media/KEh5kliRTSVJm/200w.webp?cid=3640f6095bfddeed6d6f577959d32263',
    'https://media3.giphy.com/media/Ok4HaWlYrewuY/giphy.webp?cid=3640f6095bfddf014c3431362e77f639'
  ];

  constructor() { }

  shownImageSelect( image) {
    this.imageRender = image;
  }

  setText( value: string) {
    this.textEmoji = value;
  }

  ngOnInit() {
  }

}
