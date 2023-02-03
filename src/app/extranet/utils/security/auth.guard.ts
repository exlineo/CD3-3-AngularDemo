import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfilService } from '../services/profil.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  /** Pointeur vers le profil pour pouvoir vérifier le statut de connexion de l'utilisateur */
  constructor(private profil:ProfilService){};
  /** Autoriser ou interdire l'accès à une guard */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.profil.user.status == 'peutAccederAIntranet';
  }
  /** Autoriser ou interdire le chargement de fichier en lazy loading */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.profil.user.status == 'peutAccederAIntranet';
  }
}
