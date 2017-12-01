import{news} from '../tabs/tabs.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-news-detail',
    template:  `<StackLayout *ngIf="details">
    
  <label>{{details.topic | uppercase }} Details</label>
    
</StackLayout> `
  })
export class NewsDetailComponent implements OnInit {
@Input() item: news;


constructor() { }

  ngOnInit() {
  }
}