import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfilService } from '../services/profil.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  entetes: any;

  constructor(private profil: ProfilService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Si nous avons un token, on l'ajoute en entête pour qu'ils soit présent dans toutes les requêtes
    if (this.profil.user.token) {
      this.entetes = {
        headers: new HttpHeaders(
          { 'Authorization': 'Bearer ' + this.profil.user.token }
        )
      }
      // Cloner la requête initiale et injecter les nouveaux entetes
      const httpToken = request.clone(this.entetes);
      // Renvoyer la requête clonée
      return next.handle(httpToken);
    }
    // On laisse passer la requête s'il n'y a pas de token
    return next.handle(request);
  }
}
