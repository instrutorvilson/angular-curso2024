import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DoisComponent } from './dois/dois.component'
import { RenderComponent } from './render/render.component';
import { ListaComponent } from './lista/lista.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DoisComponent, RenderComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
     nome:string = 'jose da silva'
     idade:number = 25     
}
