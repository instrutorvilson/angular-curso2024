import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Tusuario } from '../interfaces';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   msg: string = ''
   constructor(private loginService: LoginService){}
   
   login(usuario:Tusuario){
      this.msg = this.loginService.login(usuario)
   }
   
   logout(){
     this.loginService.logout()
   }
}
