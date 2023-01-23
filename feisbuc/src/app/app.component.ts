import { Component } from '@angular/core';
import { Annunci } from './model/annunci.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'feisbuc';
  listaAnnunci : Annunci[] = [];
  invia(nome:HTMLInputElement,numero:HTMLInputElement,msg:HTMLInputElement){
      this.listaAnnunci.push(new Annunci(nome.value,numero.value,msg.value))
  }
}
