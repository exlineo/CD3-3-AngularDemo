import { Component } from '@angular/core';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent {
  titre:string = 'Merci gérald pour cette application';
  soustitre:string = "De la part de Xavier et de David, with love, forever";
}
