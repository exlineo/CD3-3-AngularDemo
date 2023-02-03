import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './extranet/connexion/connexion.component';
import { InfoComponent } from './extranet/info/info.component';
import { InfosComponent } from './extranet/infos/infos.component';
import { MentionsLegalesComponent } from './extranet/mentions-legales/mentions-legales.component';
import { RgpdComponent } from './extranet/rgpd/rgpd.component';
import { AuthGuard } from './extranet/utils/security/auth.guard';
// Les chemins de navigation dans l'application
// Application routes to chemine inside the pages
const routes: Routes = [
  { path:'', component:ConnexionComponent },
  { path:'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule), canActivate:[AuthGuard], canLoad:[AuthGuard]},
  { path:'rgpd', component:RgpdComponent },
  { path:'mentions', component:MentionsLegalesComponent },
  { path:'infos', component:InfosComponent },
  { path:'info/:roberto', component:InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
