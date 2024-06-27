import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-frutas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-frutas.component.html',
  styleUrl: './lista-frutas.component.css'
})
export class ListaFrutasComponent {
  frutas:string[] = []

  constructor(private produtoService:ProdutoService){
     this.carregarFrutas() 
  }

  carregarFrutas(){
    this.frutas = this.produtoService.listarFrutas()
   }

}
