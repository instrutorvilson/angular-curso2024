import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contato } from '../interfaces/Contato';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  contatos:Contato[] = [
    {id: 1,firstName:'maria',email:'maria@gmail.com'},
    {id: 2,firstName:'joao',email:'joao@gmail.com'}
  ] 

  dadosForm(dados: Contato){
      dados.id = this.contatos.length + 1
      this.contatos.push(dados)      
    }
}
