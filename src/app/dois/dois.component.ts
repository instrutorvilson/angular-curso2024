import { Component } from '@angular/core';

@Component({
  selector: 'app-dois',
  standalone: true,
  imports: [DoisComponent],
  templateUrl: './dois.component.html',
  styleUrl: './dois.component.css'
})
export class DoisComponent {
  //mensagem : string = ''
  mensagem!:string
 
  ola(){
    console.log(`OI = ${this.mensagem}`)
     this.mensagem = 'hello world de novo'
  }
}
