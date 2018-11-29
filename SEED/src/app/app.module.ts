import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SelectAnimalComponent } from './select-animal/select-animal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './dashboard/card/card.component';
import { StringEmojiPipe } from './string-emoji.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SelectAnimalComponent,
    DashboardComponent,
    CardComponent,
    StringEmojiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
