import { Injectable } from '@angular/core';
import { Contato } from './interfaces/Contato';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  
})
export class CrudcontatoService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<[Contato]>{
    return this.http.get<[Contato]>('http://localhost:3000/contatos')
  }

  gravar(contato: Contato):Observable<Contato>{
    return this.http.post<Contato>('http://localhost:3000/contatos', contato)
  }
}
