import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './pages/intranet/intranet.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  { path:'', component:IntranetComponent, children:[
    { path:'', component:ProfilComponent},
    { path:'profil', component:ProfilComponent},
    { path:'opto', loadChildren: () => import('./opto/opto.module').then(m => m.OptoModule)},
    { path:'kine', loadChildren: () => import('./kine/kine.module').then(m => m.KineModule)},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
