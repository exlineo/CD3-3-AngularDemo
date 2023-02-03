import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KineRoutingModule } from './kine-routing.module';
import { AccueilKineComponent } from './accueil-kine/accueil-kine.component';
import { PartageModule } from '../utils/partage.module';

@NgModule({
  declarations: [
    AccueilKineComponent
    ],
  imports: [
    CommonModule,
    KineRoutingModule,
    PartageModule
  ]
})
export class KineModule { }
