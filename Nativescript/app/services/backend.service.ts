import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";

export class BackendService {
    
  static get token(): string {
    return getString("token");
  }

}
