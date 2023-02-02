import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './pages/intranet/intranet.component';


@NgModule({
  declarations: [
    IntranetComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
