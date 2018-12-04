import { AnimalsComponent } from './animals/animals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';

const routes: Routes = [
  {
    // path: 'animals', // Cmabia para activar lazy loading
    path: '',
    component: AnimalsComponent,
    children: [
      {path: '', component: CatComponent},
      {path: 'cat', component: CatComponent},
      {path: 'dog', component: DogComponent}
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingAnimals { }



