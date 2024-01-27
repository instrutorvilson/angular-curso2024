import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';

export const routes: Routes = [
    { path:'cadastro', component: CadastroComponent},
    { path: 'consulta', component: ConsultaComponent},
    { path: 'editar/:idcontato', component: EdicaoComponent}
];
