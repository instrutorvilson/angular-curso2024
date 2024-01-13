import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contato } from '../interfaces/Contato';
import { CrudcontatoService } from '../crudcontato.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit{
  contatos:Contato[] = [
    /*{id: 1,firstName:'maria',email:'maria@gmail.com'},
    {id: 2,firstName:'joao',email:'joao@gmail.com'}*/
  ] 

  constructor(private service: CrudcontatoService){}

  ngOnInit(): void {
     this.consultar()
  }

  dadosForm(dados: Contato){
      //  dados.id = this.contatos.length + 1
      // this.contatos.push(dados)  
      this.service.gravar(dados).subscribe(()=>this.consultar())    
      
    }

  consultar(){
    this.service.consultar().subscribe(data => this.contatos = data)
  }
}
