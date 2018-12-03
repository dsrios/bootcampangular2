import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { HttpClientModule } from '@angular/common/http';

import { ApiDataService } from './shared/api-data.service';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
