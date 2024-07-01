import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { AuthLogado } from './auth-logado.guard';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path:'cadastro', 
        component: CadastroComponent, 
        canActivate: [AuthLogado] },
    { path: 'consulta', component: ConsultaComponent},
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageErrorComponent }
];
