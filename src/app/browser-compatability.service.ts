import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BrowserCompatabilityService {
  isCompatible:boolean= false;
  constructor() { }
  checkBrowserCompatability(){
    var ua= window.navigator.userAgent;
    console.log(ua)
    this.isCompatible = !(/MSIE|Trident/.test(ua));
    return this.isCompatible;
  }
}
