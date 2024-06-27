import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoService } from './produto.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ListaFrutasComponent } from './lista-frutas/lista-frutas.component';
import { ListarprodutofakeComponent } from './listarprodutofake/listarprodutofake.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, ListaFrutasComponent, ListarprodutofakeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   mensagem: string = "Ola mundo";
   retorno: string = ''
  
   constructor(private produtoService:ProdutoService){
      
   }

   ola(){
      this.retorno = this.produtoService.getMensagem()
      alert(this.retorno)
   }

   adicionarFruta(fruta:string){ 
     /* console.log(fruta)
      console.log(JSON.stringify(fruta)) 
      console.log(JSON.parse(JSON.stringify(fruta)))*/
      this.produtoService.addFruta(JSON.parse(JSON.stringify(fruta)).nome)
   }
}
