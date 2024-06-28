import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TProduto } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FakeprodutoService {

  constructor(private httpClient: HttpClient) { }

  getProdutos(): Observable<TProduto[]> {
      return this.httpClient.get<TProduto[]>('https://fakestoreapi.com/products')
  }

  saveProduto():Observable<any>{
    return this.httpClient.post('https://fakestoreapi.com/products',{title:'xx', price:'10'})
  }
}
