import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { AnimalsComponent } from './animals/animals.component';
import { AppRoutingAnimals } from './routing-animals.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingAnimals
  ],
  declarations: [AnimalsComponent, CatComponent, DogComponent]
})
export class AnimalsModule { }
