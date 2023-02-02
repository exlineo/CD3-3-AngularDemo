import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptoRoutingModule } from './opto-routing.module';
import { AccueilOptoComponent } from './accueil-opto/accueil-opto.component';


@NgModule({
  declarations: [
    AccueilOptoComponent
  ],
  imports: [
    CommonModule,
    OptoRoutingModule
  ]
})
export class OptoModule { }
