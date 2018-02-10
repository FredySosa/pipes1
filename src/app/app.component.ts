import {Component} from '@angular/core';
import {reject} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Federico';
  nombre2 = 'Fredy sosA Rodriguez';

  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  a = 0.234;
  salario = 12345;

  heroe = {
    nombre: 'Bruce Wayne',
    clave: 'Batman',
    edad: 45,
    direccion: {
      ciudad: 'Gótica',
      calle: 'Cave',
      numero: 75
    }
  };

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llegó la data'), 3500);
  });

  fecha = new Date();

  video = 'JLqvv73n-n4';

  private activar = true;

  getActivar(): boolean {
    return this.activar;
  }

  toogleActivar() {
    this.activar = !this.activar;
  }
}
