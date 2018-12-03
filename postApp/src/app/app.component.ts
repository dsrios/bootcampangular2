import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  info: Post;

  selectedPostObject( objectPost ) {
    this.info = objectPost;
    console.log('ID SELECTED POST', this.info, objectPost);
  }

}

