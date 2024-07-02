import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, 
         CanActivate, GuardResult, 
         MaybeAsync, 
         Router, 
         RouterStateSnapshot } from "@angular/router";
import { Tusuario } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthLogado implements CanActivate{
 
  private user: Tusuario = {email:'', senha: '', perfil: ''}

  constructor(private router: Router){}
  eAutorizado: boolean = false

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    this.user = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user'))))
   
   if(!this.user){
    this.router.navigate(['/login'])    
   }

    this.eAutorizado = false
    if(this.user.perfil == 'gerente' 
        && route.routeConfig?.path == 'cadastro'){
          this.eAutorizado = true
    }
    
    
    if(this.user.perfil == 'operador' 
        && route.routeConfig?.path == 'consulta'){
          this.eAutorizado = true
    }    

    if(!this.eAutorizado){
      this.router.navigate(['/error'])
      return false
    }
   
    return true
  }
  
 

}

