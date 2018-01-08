import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { FormsModule} from '@angular/forms';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { MarkdownService } from '../services/markdown.service';
import { Upload } from '../models/upload';



@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})

export class UploaderComponent implements OnInit {
 
   user:string;
   msg = '';
   msg2 = '';
   date = new Date();
   convertedText: string;
  
  item: Item = {
  	title: '',
  	description: '',
    url: '',
  }
  
  selectedFiles: FileList | null;
  currentUpload: Upload;

  constructor(
    private itemService: ItemService,
    private cookieService:CookieService, 
    private md:MarkdownService,
    private upSvc: ItemService,
    ) {
    this.user = this.cookieService.get('username'); 
  }

  ngOnInit() {
  }

  // updates markup text
  updateOutput(mdText: string){
    this.convertedText = this.md.converted(mdText);
  }

  detectFiles($event: Event) {
      this.selectedFiles = ($event.target as HTMLInputElement).files;
  }

  uploadSingle() {
    const file = this.selectedFiles;
    if (file && file.length === 1) {
      this.currentUpload = new Upload(file.item(0));
      this.upSvc.pushUpload(this.currentUpload);
    } else {
      console.error('No file found!');
    }
  }

  uploadMulti() {
    const files = this.selectedFiles;
    if (!files || files.length === 0) {
      console.error('No Multi Files found!');
      return;
    }

    Array.from(files).forEach((file) => {
      this.currentUpload = new Upload(file);
      this.upSvc.pushUpload(this.currentUpload);
    });
  }

  onSubmit(){
    this.msg = "";
    this.msg2 = "";

    if(this.item.title == ''){
      this.msg = "Please fill in the title";
      alert("Please fill in the title");
    }else if(this.item.description == ''){
      this.msg = "Please fill in the Descripton";
      alert("Please fill in the Descripton");
    }else if(this.item.permissions == null){
      this.msg = "Please select the permissions";
      alert("Please select the permissions");
    }
    else{
      
      const files = this.selectedFiles;
      const file = this.selectedFiles;

        if (!files || files.length === 0) {
        console.error('No files in this post');
      }else if (file && file.length === 1){
        this.uploadSingle();
      }else{
        this.uploadMulti();
      }
                 
        
       



       this.msg = "";
       this.item.time = this.date+'';
       this.item.adminposted = this.user;
       this.item.url = this.currentUpload.file.name;
       //this.item.name = this.currentUpload.file.name;
     this.msg2 = "Posted to firebase!";
           alert("Posted to firebase!");
     this.itemService.addItem(this.item);
    }

  }


}
