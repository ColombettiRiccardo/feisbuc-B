import { Component,Input } from '@angular/core';
import { Annunci } from '../model/annunci.model'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  
  @Input() commento! : string;

}
