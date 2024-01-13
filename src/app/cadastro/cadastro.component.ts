import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  contatos:any = [
    {firstName:'maria',email:'maria@gmail.com'},
    {firstName:'joao',email:'joao@gmail.com'}
  ] 

  dadosForm(dados:any){
      this.contatos.push(dados)
    }
}
