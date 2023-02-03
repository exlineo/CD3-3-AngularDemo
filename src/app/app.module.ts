import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './template/entete/entete.component';
import { PiedComponent } from './template/pied/pied.component';
import { ConnexionComponent } from './extranet/connexion/connexion.component';
import { RgpdComponent } from './extranet/rgpd/rgpd.component';
import { MentionsLegalesComponent } from './extranet/mentions-legales/mentions-legales.component';
import { InfosComponent } from './extranet/infos/infos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfoComponent } from './extranet/info/info.component';
import { TokenInterceptor } from './extranet/utils/security/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedComponent,
    ConnexionComponent,
    RgpdComponent,
    MentionsLegalesComponent,
    InfosComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
