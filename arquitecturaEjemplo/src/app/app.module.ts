import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { DogModule } from './dog/dog.module';
import { PersonModule } from './person/person.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DogModule,
    PersonModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
