import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, 
         CanActivate, GuardResult, 
         MaybeAsync, 
         Router, 
         RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthLogado implements CanActivate{

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(localStorage.getItem('user')){
      console.log('usuario logado')
    }
    else{
      console.log('não logado')
      this.router.navigate(['/login'])
    }
    return true
  }
  
 

}

