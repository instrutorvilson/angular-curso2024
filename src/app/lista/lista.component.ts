import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Contato } from '../../interfaces/Contato';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
    nomes:string[] = ['maria', 'joana', 'José','Pedro','Antonio']
    
    contatos:Contato[] = [
      { 
        id:1,
        nome:'maria',
        email:'maria@gmail.com',
        fone:'(47)0987-0987'
      },
      { 
        id:2,
        nome:'joão',
        email:'joao@gmail.com',
        fone:'(47)0957-0987'
      }
    ]
}
