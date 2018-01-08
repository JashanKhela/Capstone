
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { Item } from '../models/item';
import { Upload } from '../models/upload';


@Injectable()
export class ItemService{
	
	// path for the files
  	basePath = 'uploads';
	

	itemsCollection: AngularFirestoreCollection<Item>;
	items: Observable<Item[]>;
	itemDoc: AngularFirestoreDocument<Item>;

	constructor(public afs: AngularFirestore){
		//returns the collection as an observable
		//this.items = this.afs.collection('items').valueChanges();

		this.itemsCollection = this.afs.collection('items',ref => ref.orderBy('time','desc'));

		//this code returns the id vs top code doesnt
		this.items = this.itemsCollection.snapshotChanges().map(changes =>{
			return changes.map(a =>{
				const data = a.payload.doc.data() as Item;
				data.id = a.payload.doc.id
				return data;
			});
		});
		
	}

	
	getItems(){
		return this.items;
	}

	addItem(item: Item){
		this.itemsCollection.add(item);
	}

	deleteItem(item: Item){
		this.itemDoc = this.afs.doc(`items/${item.id}`);
		this.itemDoc.delete();
	}


	updateItem(item: Item){
		this.itemDoc = this.afs.doc(`items/${item.id}`);
		this.itemDoc.update(item);
	}

	// Uploads the files to the storage bucket
  	public pushUpload(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) =>  {
        // upload in progress
        const snap = snapshot;
        upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // upload success
        if (uploadTask.snapshot.downloadURL) {
          upload.url = uploadTask.snapshot.downloadURL;
          upload.name = upload.file.name;
          // this.saveFileData(upload);
          // reference firestore here!!!!!
       
          return;
        } else {
          console.error('No download URL!');
        }
      },
    );
  	} // end of pushUpload

  	/*
	 // Writes the file details to the realtime db
 		private saveFileData(upload: Upload) {
    	this.db.list(`${this.basePath}/`).push(upload);
  		}
  	*/


}