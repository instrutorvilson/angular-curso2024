import { Component } from '@angular/core';
import { TProduto } from '../interfaces';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, FormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
   produtos: TProduto[] = []
  
   descricao: string = ''
   preco: Number = 0
   estoque: Number = 0

   constructor(private produtoService: ProdutoService){
      this.produtos = this.produtoService.getTodosProdutos()
   }

   gerarDados(){
      this.produtoService.salvar(
        { 
          descricao:this.descricao, 
          preco:this.preco, 
          estoque: this.estoque
        })
   }
}
