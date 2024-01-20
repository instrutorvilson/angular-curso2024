import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContato } from '../interfaces/IContato';

@Injectable({
  providedIn: 'root'
})
export class CadserviceService {

  constructor(private http: HttpClient) { }
   
  gravar(dados: IContato):Observable<IContato>{
    return this.http.post<IContato>('http://localhost:3000/contatos', dados)
  }

  consultar():Observable<[IContato]>{
    return this.http.get<[IContato]>('http://localhost:3000/contatos')
  }

  excluir(id:number):Observable<string>{
   return this.http.delete<string>(`http://localhost:3000/contatos/${id}`)
  }
  
}
