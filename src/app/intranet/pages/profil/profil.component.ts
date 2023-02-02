import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../utils/services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  edit:boolean = false; // Activer ou désactiver l'édition du profil

  constructor(public users:UsersService){}
  /** Récupérer les données du profil */
  ngOnInit(): void {
    this.users.getProfil();
  }
}
