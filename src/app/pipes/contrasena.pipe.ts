import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(contrasena: string, param: boolean): string {

    if (param) {

      return contrasena.replace(/./g, '*');
    }

    return contrasena;
  }

}
