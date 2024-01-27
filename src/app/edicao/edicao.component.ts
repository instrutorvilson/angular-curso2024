import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContato } from '../../interfaces/Icontato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-edicao',
  standalone: true,
  imports: [],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoComponent implements OnInit {
  contato: IContato = { firstName: '', lastName: '', email:''}

  constructor(private route: ActivatedRoute, private service: ContatoService){}
 
  ngOnInit(): void {
    let params = this.route.snapshot.params
     
    let idcontato = params['idcontato'] || ''

    this.service.consultarPorId(idcontato).subscribe(data => this.contato = data)
  }
}
