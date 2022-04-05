import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  hayError: boolean = false;
  mostrarSugerencia: boolean = false;

  constructor(private paisService: PaisService) {}
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
        this.mostrarSugerencia = false;
      },
      (err) => {
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.mostrarSugerencia = true;
        this.paisesSugeridos = paises.splice(0, 3);
      },
      (err) => {
        this.paisesSugeridos = [];
        this.mostrarSugerencia = false;
      }
    );
  }
}
