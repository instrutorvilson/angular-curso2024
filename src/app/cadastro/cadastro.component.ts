import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  contatos = [
    {
      nome:'maria',email:'maria@gmail.com',
      fone: '(47) 9090-9090'
    },
    {
      nome:'joao',email:'joao@gmail.com',
      fone: '(47) 9090-8090'
    }
  ]


  recebeDados(dados:any){
    
     this.contatos.push(dados)
  }
}
