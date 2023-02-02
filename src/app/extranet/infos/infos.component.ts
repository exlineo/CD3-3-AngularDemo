import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConnexionService } from '../utils/services/connexion.service';
import { InfosService } from '../utils/services/infos.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit, OnDestroy {
  
  constructor(public actus:InfosService){

  }
  ngOnInit(){
  }
  ngOnDestroy(){

  }
}
