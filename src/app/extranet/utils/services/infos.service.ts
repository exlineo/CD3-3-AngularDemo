import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  /** Tableau d'actualités */
  actualites:Array<any> = [];
  infos!:any[];

  constructor() {
    this.actualites.push({
      titre:"C'est nouveau, ça vient de sortir",
      description:"Il parait qu'il s'est passé un truc nouveau à Pau. L'événement a remué les coeurs des béarnais. Il était temps.",
      image:"https://pbs.twimg.com/media/EyhGqfhXEAIVbSC?format=jpg&name=large"
    });
    this.actualites.push({
      titre:"Il est là, il est arrivé !!!!",
      description:"C'est Eric, c'est l'unique, le rouge. Il a traversé les époques pour venir nous donner son message ! Les coeurs vibrent encore dans l'impatience.",
      image:"https://islande24.fr/wp-content/uploads/2019/02/ScreenShot2019-02-11at19.27.40.png"
    });
  }
}
