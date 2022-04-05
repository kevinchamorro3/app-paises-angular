import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set(
      'fields',
      'name,capital,cca2,population,flags'
    );
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  getPaisCodigo(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarRegion(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
}
