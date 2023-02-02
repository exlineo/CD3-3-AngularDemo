import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActualiteI } from '../modeles/types';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  /** Tableau d'actualités */
  actualites:Array<ActualiteI> = [];
  infos!:any[];

  constructor(private http:HttpClient) {
  }
  /** Récupérer les actualités depuis un fichier json */
  getActus(){
    this.http.get<Array<ActualiteI>>('assets/data/actualites.json').subscribe(
      {
        next: actus => {
          console.log(actus);
          this.actualites = actus;
        },
        error: er => console.log(er),
        complete: () => console.log("J'ai finiiii")
      }
    )
  }
}
