import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsupportedBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
