import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KineRoutingModule } from './kine-routing.module';
import { AccueilKineComponent } from './accueil-kine/accueil-kine.component';

@NgModule({
  declarations: [
    AccueilKineComponent
    ],
  imports: [
    CommonModule,
    KineRoutingModule
  ]
})
export class KineModule { }
