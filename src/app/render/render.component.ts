import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-render',
  standalone: true,
  imports: [NgIf],
  templateUrl: './render.component.html',
  styleUrl: './render.component.css'
})
export class RenderComponent {
   show:boolean = true
   status:string = 'Esconder'
   trocar(){
     this.show = !this.show
     this.status = !this.show ? 'Mostrar' : 'Esconder'
   }
}
