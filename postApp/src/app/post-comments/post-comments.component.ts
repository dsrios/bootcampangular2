import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from '../shared/api-data.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post';
import { Comment } from '../comment';


@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  @Input() dataPost: Post;

  constructor() {
  }

  ngOnInit() {
    console.log('respuesta ========>', this.dataPost);
  }



}
