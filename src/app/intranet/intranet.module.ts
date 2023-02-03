import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './pages/intranet/intranet.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { FormsModule } from '@angular/forms';
import { AlimentsPipe } from './utils/pipes/aliments.pipe';


@NgModule({
  declarations: [
    IntranetComponent,
    ProfilComponent,
    // AlimentsPipe
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule
  ]
})
export class IntranetModule { }
