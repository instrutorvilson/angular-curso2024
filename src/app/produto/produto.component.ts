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
   
   id:  number = 0
   descricao: string = ''
   preco: number = 0
   estoque: number = 0

   produto: TProduto = {descricao:''}

   constructor(private produtoService: ProdutoService){
      this.produtos = this.produtoService.getTodosProdutos()
   }

   gerarDados(){
      if(this.id != 0){
        this.produto = this.produtoService.getProdutoPeloId(this.id.toString())
        this.produto.descricao = this.descricao
        this.produto.preco = this.preco
        this.produto.estoque = this.estoque

        this.id = 0
      }
      else{
        if(this.isValid()){
          this.produtoService.salvar(
            { 
              descricao:this.descricao, 
              preco:this.preco, 
              estoque: this.estoque
            })
        }
        else{
          alert('Formulário inválido')
        }
      }
   }

   excluir(id:any){
      this.produtoService.excluir(Number(id))
   }

   editar(id:any){
     this.produto =  this.produtoService.getProdutoPeloId(id)
     this.id = Number(this.produto.id)
     this.descricao = this.produto.descricao
     this.preco = Number(this.produto.preco)
     this.estoque = Number(this.produto.estoque)
   }


   isValid():boolean{
    return this.descricao != '' &&  this.preco > Number(0) && this.estoque > Number(0)
  }
}
