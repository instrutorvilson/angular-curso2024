import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IContato } from '../../interfaces/Icontato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {
  contatos:IContato[] = []

  constructor(private service: ContatoService){}

  ngOnInit(): void {
     this.consultar()
  }

  excluir(id:any){
     this.service.excluir(id).subscribe(s => this.consultar())
  }

  consultar(){
    this.service.consultar()
     .subscribe(data => {  this.contatos = data   })
  }
}
