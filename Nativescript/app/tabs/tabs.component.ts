import {Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Page } from "ui/page"; // to hide action bar
import * as listViewModule from "tns-core-modules/ui/list-view";
import * as ImageModule from "tns-core-modules/ui/image";
import { Image } from "tns-core-modules/ui/image";
import { OnInit } from '@angular/core';
import { Info} from './info';
import {RouterExtensions} from 'nativescript-angular/router/router-extensions';
import {Router} from '@angular/router';
import {BackendService, FirebaseService} from "../services";
import {Observable} from 'rxjs/Observable';



export class news{
  constructor(
    public id: number,
    public title : String, 
    public adminposted: string, 
    public description: String ){}
}


@Component({
  selector: "tabs",
  templateUrl: "./tabs/tabs.component.html",
  styleUrls:["./tabs/tabs.component.css"]
})
export class tabsComponent implements OnInit{

  public news$: Observable<any>;
  
  constructor(private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router
    ) {}

    ngOnInit() {
      this.news$ = <any>this.firebaseService.getnews();

    }
  
    // viewDetail(id: string){
    //   this.router.navigate(["/list-detail", id]);
    // }
  

  }

