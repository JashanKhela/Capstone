import {Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Page } from "ui/page"; // to hide action bar
import * as listViewModule from "tns-core-modules/ui/list-view";
<<<<<<< HEAD
import * as ImageModule from "tns-core-modules/ui/image";
import { Image } from "tns-core-modules/ui/image";
import { OnInit } from '@angular/core';
import { Info} from './info';
=======
import {Input, ChangeDetectionStrategy} from '@angular/core';
>>>>>>> 7a7e72761adb01e6beac45cd6bde05a5dcad27f9



export class news{
  constructor(
    public id: number,
    public Topic : String, 
    public author: string, 
    public pic: string, 
    public prev: String,
    public body: String ){}
}


@Component({
  selector: "tabs",
  templateUrl: "./tabs/tabs.component.html",
  styleUrls:["./tabs/tabs.component.css"]
})
export class tabsComponent implements OnInit{
  News: news[];
  constructor(){
    this.News= [
      {id: 0,
      Topic: 'Random News about Nothing',
      author: 'James Lock', 
      pic: "https://www.w3schools.com" +"/images/w3schools_green.jpg", 
      prev: "This is the preview to nothing ...",
      body: "This si the preview to nothing and i have nothing else to say" },
      {id: 1,
      Topic: 'Who is Dr. Blankface',
      author: 'Dr. Real Face', 
      pic: "https://www.w3schools.com" +"/w3css/img_avatar3.png", 
      prev: "This is the preview to who Dr. no face is dont read into it too much okay ...",
      body: "This si the preview to nothing and i have nothing else to say" },
      {id: 2,
      Topic: 'Random News about Everything',
      author: 'Yank Mike Rotch', 
      pic: "https://www.w3schools.com"+"/images/w3schools_green.jpg", 
      prev: "This is the preview to everything ...",
      body: "This si the preview to nothing and i have nothing else to say" },
      {id: 3,
        Topic: 'THE END IS NIGH!!!',
        author: 'Reverend Donations', 
        pic: "https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg", 
        prev: "This is the to everything as we know it",
        body: "This si the preview to nothing and i have nothing else to say" },
        {id: 4,
          Topic: 'Sayians Hate Him!!!',
          author: 'Gangstalicious', 
          pic: "~/images/LilBill.png", 
          prev: "Learn how this teenager found out the secret to unlock sayian..",
          body: "This si the preview to nothing and i have nothing else to say" }
    ]
  }
  selectedNews: news;
    ngOnInit() {
    }
  
    onSelect(item: news): void {
      this.selectedNews = item;
    }
  }

