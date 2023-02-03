import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aliments'
})
export class AlimentsPipe implements PipeTransform {

  transform(values: Array<any>, filtre: string): Array<any> {
    if (!filtre || filtre.length < 3) return values;
    if (!values) return [];
    // Retour des données filtrées, la fonction filter renvoie un tableau d'aliments trouvés
    return values.filter(
      aliment => {
        // Si un aliment est trouvé, il est renvoyé
        if (aliment.alim_nom_fr.toLowerCase().indexOf(filtre.toLocaleLowerCase()) != -1) {
          return aliment;
        } else if(aliment.alim_grp_nom_fr){
          if(aliment.alim_grp_nom_fr.toLowerCase().indexOf(filtre.toLocaleLowerCase()) != -1)
            return aliment
        }
      }
    )
  }

}
