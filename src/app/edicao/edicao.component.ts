import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
      id: new FormControl(this.contato.id) || 0, 
      firstName: new FormControl(''),   
      lastName: new FormControl('') ,
      email: new FormControl('')
    }
  )

  constructor(private router: Router, private route: ActivatedRoute, private service: ContatoService){}
 
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
    //verifica se contato ja foi cadastrado
     this.service.consultar().subscribe(data => {
       let dados =  data.filter(element => element.email == this.contatoForm.value.email )
            
       if(dados.length > 0){
        alert("email já inserido")
        return
      }
 
       let obj: IContato = {
         id: this.contatoForm.value.id || 0,
         firstName: this.contatoForm.value.firstName!,
         lastName: this.contatoForm.value.lastName!,
         email: this.contatoForm.value.email!,
      }
        this.service.alterar(obj).subscribe( data => {
           this.router.navigate(['/consulta'])
        })     
    })  
  }   
    
}
