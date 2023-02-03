import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { AccueilNutriComponent } from './accueil-nutri/accueil-nutri.component';
import { PartageModule } from '../utils/partage.module';


@NgModule({
  declarations: [
    AccueilNutriComponent,
  ],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    PartageModule
  ]
})
export class NutritionModule { }
