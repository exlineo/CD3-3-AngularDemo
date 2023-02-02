import { Component } from '@angular/core';
import { ConnexionService } from '../utils/services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  titre:string="Se connecter";
  /**
   * @param con Pointeur vers le service connexionService
   */
  constructor(public con:ConnexionService){}
  // Methode semi américaine pour afficher l'état des données de l'objet connexion
  ditMoiQuoiDansObjetConnection(){
    console.log(this.con.connexion);
  }
}
