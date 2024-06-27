import { Component } from '@angular/core';
import { FakeprodutoService } from '../fakeproduto.service';

@Component({
  selector: 'app-listarprodutofake',
  standalone: true,
  imports: [],
  templateUrl: './listarprodutofake.component.html',
  styleUrl: './listarprodutofake.component.css'
  
})
export class ListarprodutofakeComponent {
  
  produtos: any[] = []
  constructor(private fakeProduto: FakeprodutoService){}

  carregarProdutos(){
    this.fakeProduto.getProdutos().subscribe(dados => console.log(dados))
  }
}
