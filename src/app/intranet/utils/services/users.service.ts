import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../../../extranet/utils/modeles/user-i';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  profil:UserI = <UserI>{}; // Objet du profil de l'utilisateur

  constructor(private http:HttpClient) { }
  /** Récuper les données du profil */
  getProfil(){
    this.http.get<UserI>('assets/data/profil.json').subscribe(
      {
        next:r => this.profil = r,
        error:er => console.log(er),
        complete:() => console.log('Requête sur le profil faite')
      }
    );
  }

}
