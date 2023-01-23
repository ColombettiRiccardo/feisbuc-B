import { Component, Input } from '@angular/core';
import { Annunci } from '../model/annunci.model'

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.css']
})
export class AnnunciComponent {
    @Input() annunci! : Annunci 
    likeview : boolean = false;

    commenta(c:HTMLInputElement){
      this.annunci.commento.push(c.value)
      this.likeview=true;
    }
    addLike() {
      this.annunci.like++;
    }
    
}
