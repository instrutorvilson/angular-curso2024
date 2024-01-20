import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-cadastrotd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrotd.component.html',
  styleUrl: './cadastrotd.component.css'
})
export class CadastrotdComponent {

  onSubmit(dados:any){
    console.log(dados)
  }
}
