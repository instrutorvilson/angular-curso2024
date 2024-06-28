import { Component } from '@angular/core';
import { FakeprodutoService } from '../fakeproduto.service';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-listarprodutofake',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './listarprodutofake.component.html',
  styleUrl: './listarprodutofake.component.css'
  
})
export class ListarprodutofakeComponent {
  produtos: any[] = [{id:1, title:'milho',price:10}]

  constructor(private fakeProduto: FakeprodutoService){
     this.carregarProdutos()
  }

  carregarProdutos(){
    this.fakeProduto.getProdutos().subscribe(dados => this.produtos = dados)      
  }
}
