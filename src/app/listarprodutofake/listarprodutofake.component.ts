import { Component } from '@angular/core';
import { FakeprodutoService } from '../fakeproduto.service';
import { NgFor } from '@angular/common'
import { TProduto } from '../interfaces/interfaces';

@Component({
  selector: 'app-listarprodutofake',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './listarprodutofake.component.html',
  styleUrl: './listarprodutofake.component.css'
  
})
export class ListarprodutofakeComponent {
  produtos: TProduto[] = []

  constructor(private fakeProduto: FakeprodutoService){
     this.carregarProdutos()
  }

  carregarProdutos(){
    this.fakeProduto.getProdutos().subscribe(dados => this.produtos = dados)      
  }

  criar(){
    this.fakeProduto.saveProduto().subscribe(dados => {})
  }
}
