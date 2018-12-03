import { Component, OnInit, Output } from '@angular/core';
import { ApiDataService } from '../shared/api-data.service';
import { Post } from '../post';
import { Comment } from '../comment';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Output() selectedPost = new EventEmitter();

  postList: Post;
  urlPost = 'https://jsonplaceholder.typicode.com/posts';
  urlComments = 'https://jsonplaceholder.typicode.com/comments';
  CommentsList = [];

  constructor(private _apiData: ApiDataService) {
    this._apiData.getListData(this.urlPost).subscribe(
        ( resp ) => {
          console.log('Respuesta ', resp);

          this.postList = resp;
        }
      );

    console.log('POST LIST', this.postList);

   }

   sendObject( postObject: Post) {
     console.log('postObject', postObject);

     this.filterCommentsByIdPost(postObject.id);
     console.log(' comment list', this.CommentsList);
     

     this.selectedPost.emit(this.CommentsList);
   }

   filterCommentsByIdPost( idPost ) {
    this.CommentsList = [];
    this._apiData.getListData(this.urlComments).subscribe(
      (resp: any) => {
        resp.filter(
          ( data: Comment )  => {
            if ( data.postId ===  idPost) {
              this.CommentsList.push(data);
            }
          }
        );
      }
    );

  }

  ngOnInit() {
  }



}
