import { BrowserCompatabilityService } from './browser-compatability.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   ua!: boolean;
  constructor(private bc: BrowserCompatabilityService, private routes: Router){
  }
  ngOnInit() {
    this.ua=this.bc.checkBrowserCompatability()
    if(!this.ua){
      this.routes.navigate(["unsupported"])
    }
  }

  
}
