import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/extranet/utils/modeles/user-i';
import { ProfilService } from './profil.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  /** Objet qui servira pour suivre les données saisies dans le formulaire */
  connexion:any = {
    id:{
      value:'',
      placeholder:'Renseignez votre identifiant'
    },
    mdp:{
      value:'',
      placeholder:'Vous devriez avoir un mot de passe'
    }
  }

  constructor(private http:HttpClient, private router:Router, public profil:ProfilService) { }

   /** Méthode de connexion pour envoyer les informations au service de connexion */
   seConnecter(){
    // idformulaire@mdpformulaire.json
    this.http.get(`assets/ids/${this.connexion.id.value}@${this.connexion.mdp.value}.json`).subscribe(
      {
        next:user => {
          console.log(user);
          this.profil.user = user as UserI;
        },
        error:er => console.log("Aie, aie, aie, la connexion n'a pas marché !!!"),
        complete: () => this.router.navigateByUrl('/intranet')
      }
    )
   }
}
