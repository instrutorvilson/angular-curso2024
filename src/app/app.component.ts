import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastrotdComponent } from './cadastrotd/cadastrotd.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroComponent, CadastrotdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-aula3';
}
