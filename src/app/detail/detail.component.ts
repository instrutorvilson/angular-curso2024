import { Component } from '@angular/core';
import { TProduto } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
   produto: TProduto = { id: 0, descricao:''}
   constructor(
    private route: ActivatedRoute, 
    private produtoService: ProdutoService
    ){
     this.produto =  this.produtoService
                     .getProdutoPeloId(this.route.snapshot.params['id'])
   }

}
