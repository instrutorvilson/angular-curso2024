import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IContato } from '../../interfaces/Icontato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-edicao',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoComponent implements OnInit {
  contato: IContato = { firstName: '', lastName: '', email:''}

  contatoForm = new FormGroup(
    {
      id: new FormControl(this.contato.id), 
      firstName: new FormControl(''),   
      lastName: new FormControl('') ,
      email: new FormControl('')
    }
  )

  constructor(private route: ActivatedRoute, private service: ContatoService){}
 
  ngOnInit(): void {
    let params = this.route.snapshot.params
     
    let idcontato = params['idcontato'] || ''

    this.service.consultarPorId(idcontato).subscribe(data => {
          this.contato = data
          this.contatoForm.patchValue({
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
          })   
      } 
    )
  }

  onSubmit(){

  }
}
