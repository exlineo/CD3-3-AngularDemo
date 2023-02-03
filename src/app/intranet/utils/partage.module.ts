import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlimentsPipe } from './pipes/aliments.pipe';

/** Module dont on partage les classes vers d'autres modules */
@NgModule({
  declarations: [
    AlimentsPipe
  ],
  exports:[
    FormsModule,
    AlimentsPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PartageModule { }
