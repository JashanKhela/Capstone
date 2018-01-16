import {Injectable, NgZone} from "@angular/core";
import {news} from "../tabs/tabs.component";
import { BackendService } from "./backend.service";
import firebase = require("nativescript-plugin-firebase");
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';

@Injectable()
export class FirebaseService {
  constructor(
    private ngZone: NgZone,
  ){}
    
  items: BehaviorSubject<Array<news>> = new BehaviorSubject([]);
  
  private _allItems: Array<news> = [];

  getMyWishList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = 'Items';
      
        let onValueEvent = (snapshot: any) => {
          this.ngZone.run(() => {
            let results = this.handleSnapshot(snapshot.value);
            console.log(JSON.stringify(results))
             observer.next(results);
          });
        };
        firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();              
  }

  getMyGift(id: string): Observable<any> {
    return new Observable((observer: any) => {
      observer.next(this._allItems.filter(s => s.id === id)[0]);
    }).share();
  }

  handleErrors(error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message);
  }
}