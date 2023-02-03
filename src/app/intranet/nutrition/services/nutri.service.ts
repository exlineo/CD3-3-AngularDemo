import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutriService {
  aliments:Array<any> = []; // Tableau des aliments

  constructor(private http:HttpClient) { }
  
  /** Récupérer la liste des aliments dans le fichier json Ciqual */
  getAliments(){
    this.http.get<Array<any>>('assets/data/ciqual.json').subscribe(
      {
        next: al => this.aliments = al,
        error : er => console.log("Tu vas pouvoir te serrer la ceinture"),
        complete: () => console.log("C'est ok pour miam miam")
      }
    )
  }
}
