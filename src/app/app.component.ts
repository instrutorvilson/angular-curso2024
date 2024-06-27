import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutoComponent } from './produto/produto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CadastroComponent, ProdutoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-aula2';

  contato = {
    nome: 'Maria',
    email: 'maria@gmail.com',
    fone: '(47) 9090-8070'
  }

  ola(){
    alert('Ola')
  }

  frutas = ['maça','laranja','pera']

}
