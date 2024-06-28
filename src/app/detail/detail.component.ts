import { Component } from '@angular/core';
import { TProduto } from '../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
 
  produtos: TProduto[] = [
    { id: 1, descricao: 'Milho', preco: 10, estoque: 15},
    { id: 2, descricao: 'Arroz', preco: 21.50, estoque: 15},
    { id: 3, descricao: 'Trigo', preco: 19, estoque: 20}
   ]

   produto: TProduto = { id: 0, descricao:''}

   idProduto: string = ''

   constructor(private route: ActivatedRoute){
     this.idProduto = this.route.snapshot.params['id']
     this.produtos.map(p => {
      if(p.id == Number(this.idProduto)){
        this.produto = p
      }
     })
   }

}
