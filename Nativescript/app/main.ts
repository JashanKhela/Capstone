import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { registerElement } from "nativescript-angular/element-registry";
import { BackendService } from "./services/backend.service";

import firebase = require("nativescript-plugin-firebase");

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);


firebase.init({
  //persist should be set to false as otherwise numbers aren't returned during livesync
  persist: false,
  storageBucket: 'gs://giftler-f48c4.appspot.com',
  onAuthStateChanged: (data: any) => {
    console.log(JSON.stringify(data))
  }
}).then(
  function (instance) {
    console.log("firebase.init done");
  },
  function (error) {
    console.log("firebase.init error: " + error);
  }
  );
platformNativeScriptDynamic().bootstrapModule(AppModule);

// const firebase = require("nativescript-plugin-firebase");



// firebase.subscribeToTopic("news");

// firebase.getCurrentPushToken().then((token: string) => {
//     // may be null if not known yet
//     console.log("Current push token: " + token);
//   });