import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilKineComponent } from './accueil-kine/accueil-kine.component';

const routes: Routes = [
  { path:'', component:AccueilKineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KineRoutingModule { }
