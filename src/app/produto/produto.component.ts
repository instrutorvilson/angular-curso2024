import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } 
from '@angular/forms';
import { NgFor} from '@angular/common';

type Tproduto = {
  descricao?: string | null
  preco?: string | null
}

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
   meuForm = new FormGroup({
    descricao: new FormControl('milho'),
    preco: new FormControl('10')
   })

   produtos: Tproduto[] = []

   recebeDados(){
      this.produtos.push(this.meuForm.value)
   }
}
