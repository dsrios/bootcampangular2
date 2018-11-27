import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SelectAnimalComponent } from './select-animal/select-animal.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SelectAnimalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
