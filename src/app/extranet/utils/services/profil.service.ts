import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/extranet/utils/modeles/user-i';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  /** Profil de l'utilisateur */
  user:UserI = <UserI>{};

  constructor(private router:Router) { }
  // Déconnecter l'utilisateur
  deconne(){
    this.user = <UserI>{};
    this.router.navigateByUrl('/');
  }
}
