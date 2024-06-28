import { Component } from '@angular/core';
import { TProduto } from '../interfaces';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
   produtos: TProduto[] = [
    { id: 1, descricao: 'Milho'},
    { id: 2, descricao: 'Arroz'},
    { id: 3, descricao: 'Trigo'}
   ]
}
