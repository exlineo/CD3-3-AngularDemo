import { Injectable } from '@angular/core';
import { UserI } from 'src/app/extranet/utils/modeles/user-i';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  /** Profil de l'utilisateur */
  user:UserI = <UserI>{};

  constructor() { }
}
