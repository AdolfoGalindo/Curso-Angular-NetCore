import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generoDTO, generoCreacionDTO } from './genero';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http:HttpClient) { }
  private apiURL = environment.apiURL + 'generos';

  public obtenerTodos(): Observable<generoDTO[]>{
   
    return this.http.get<generoDTO[]>(this.apiURL);
 
  }

  public crear(genero: generoCreacionDTO){
    return this.http.post(this.apiURL, genero);

  }

}
