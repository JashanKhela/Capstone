import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
// const firebase = require("nativescript-plugin-firebase");

platformNativeScriptDynamic().bootstrapModule(AppModule);


// firebase.subscribeToTopic("news");

// firebase.getCurrentPushToken().then((token: string) => {
//     // may be null if not known yet
//     console.log("Current push token: " + token);
//   });