import { Injectable } from '@angular/core';
import { TProduto } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: TProduto[] = [
    { id: 1, descricao: 'Milho', preco: 10, estoque: 15 },
    { id: 2, descricao: 'Arroz', preco: 21.50, estoque: 15 },
    { id: 3, descricao: 'Trigo', preco: 19, estoque: 20 }
  ]

  constructor() { }

  getTodosProdutos() {
    return this.produtos;
  }

  getProdutoPeloId(id: string): TProduto {
    return this.produtos.filter(prod => prod.id == Number(id))[0]
  }

  salvar(produto: TProduto) {
    produto.id = this.produtos.length + 1;
    this.produtos.push(produto)
  }
}
