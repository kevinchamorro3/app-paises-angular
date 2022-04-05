import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClaseCss(region: string): string {
    return region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region !== this.regionActiva) {
      this.regionActiva = region;
      this.paises = [];
      this.paisService.buscarRegion(this.regionActiva).subscribe((paises) => {
        this.paises = paises;
      });
    }
  }
}
