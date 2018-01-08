import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import * as firebase from 'firebase/app';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { MarkdownService } from '../services/markdown.service';
import { FileuploadService } from '../services/fileupload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  convertedText: string;


  constructor(private cookieService:CookieService, private itemService: ItemService, private md:MarkdownService) {

   }


  ngOnInit() {
		this.itemService.getItems().subscribe(items => {
			this.items = items;
		})
  }


   updateOutput(mdText: string){
    this.convertedText = this.md.converted(mdText);
  }


  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState;
    alert("post updated!");
  }


  deleteItem(event,item: Item){
    this.clearState();
    this.itemService.deleteItem(item);
     alert("post deleted!");
  }

  editItem(event,item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }
  
  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }

}

