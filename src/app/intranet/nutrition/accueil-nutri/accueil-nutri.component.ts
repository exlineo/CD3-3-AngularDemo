import { Component, OnInit } from '@angular/core';
import { NutriService } from '../services/nutri.service';

@Component({
  selector: 'app-accueil-nutri',
  templateUrl: './accueil-nutri.component.html',
  styleUrls: ['./accueil-nutri.component.css']
})
export class AccueilNutriComponent implements OnInit{

  ecart:number = 8; // L'écart de la pagination
  debut:number = 0; // Le début de la pagination
  filtre:string = 'Filtrer les aliments'; // Ce qui va servir à filtrer le tableau des aliments

  constructor(public nutri:NutriService){};

  ngOnInit(){
    // Lancer la récupération de la liste des aliments
    this.nutri.getAliments();
  }
  // Paginer vers l'avant dans le tableau des aliments
  suitePagination(){
    this.debut += this.ecart;
  }
  // Paginer vers l'arrière dans le tableau des éléments
  retourPagination(){
    this.debut -= this.ecart;
  }
}
