import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './pages/intranet/intranet.component';
import { ProfilComponent } from './pages/profil/profil.component';


@NgModule({
  declarations: [
    IntranetComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
