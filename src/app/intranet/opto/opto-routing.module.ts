import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilOptoComponent } from './accueil-opto/accueil-opto.component';

const routes: Routes = [
  { path:'', component:AccueilOptoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptoRoutingModule { }
