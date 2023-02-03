import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilService } from '../services/profil.service';

@Injectable()
export class Aie401Interceptor implements HttpInterceptor {

  constructor(private profil:ProfilService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      // On récupère la requête réalisée et on vérifie si une erreur 401 s'est produite
      erreur => {
        if(erreur instanceof HttpErrorResponse && erreur.status == 401){
          this.profil.deconne(); // On déconnecte l'utilisateur
        }
        return erreur;
      });
  }
}
