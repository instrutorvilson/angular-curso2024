import { Injectable } from '@angular/core';
import { Tusuario } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarios:Tusuario[] = [
    {
      email:'ana@gmail.com', senha:'123', perfil:'gerente'
    },
    {
      email:'joao@gmail.com', senha:'456', perfil: 'operador'
    },
    {
      email:'jose@gmail.com', senha:'789',
      perfil: 'adm'
    }
  ]

  constructor() { }
  
  login(usuario:Tusuario): string {
   this.logout() 
   for(let i =0; i < this.usuarios.length; i++){
     if(this.usuarios[i].email == usuario.email && this.usuarios[i].senha == usuario.senha){
        localStorage.setItem('user', JSON.stringify(this.usuarios[i]))
        return 'usuário logado com sucesso'
     }
   }
    return 'O usuario ou senha estão incorretos' 
  }

  logout():void{
    localStorage.removeItem('user')
  }
}
