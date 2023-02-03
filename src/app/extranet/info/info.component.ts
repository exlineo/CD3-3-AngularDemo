import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualiteI } from '../utils/modeles/types';
import { InfosService } from '../utils/services/infos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  /** Id de l'article à récupérer dans le service */

  /** Article à récupérer dans le service */
  article:ActualiteI = <ActualiteI>{};
  /** Pointeur dans le service */
  constructor(public actus:InfosService, private router:ActivatedRoute){};
  /** Déclenché lorsque le composant est prêt dans le framework */
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('roberto')!;
    this.article = this.actus.actualites[parseInt(id)];
  }

}
