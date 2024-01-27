import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IContato } from '../../interfaces/Icontato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  contatoForm = new FormGroup(
    {
      firstName: new FormControl('maria',[Validators.required]),   
      lastName: new FormControl('das dores') ,
      email: new FormControl('maria@gmail.com')
    }
  );

  onSubmit(){
    console.log(this.contatoForm.value)
    let obj: IContato = {
       firstName: this.contatoForm.value.firstName!,
       lastName: this.contatoForm.value.lastName!,
       email: this.contatoForm.value.email!,
    }
    this.service.gravar(obj).subscribe()
  }

  constructor(private service:ContatoService){}

}
