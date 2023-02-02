import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './extranet/connexion/connexion.component';
import { InfosComponent } from './extranet/infos/infos.component';
import { MentionsLegalesComponent } from './extranet/mentions-legales/mentions-legales.component';
import { RgpdComponent } from './extranet/rgpd/rgpd.component';
// Les chemins de navigation dans l'application
// Application routes to chemine inside the pages
const routes: Routes = [
  { path:'', component:ConnexionComponent },
  { path:'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule)},
  { path:'rgpd', component:RgpdComponent },
  { path:'mentions', component:MentionsLegalesComponent },
  { path:'infos', component:InfosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
