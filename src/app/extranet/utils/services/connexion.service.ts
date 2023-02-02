import { Injectable } from '@angular/core';

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

  constructor() { }
}
