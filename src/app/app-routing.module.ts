import { unsupported } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsupportedBrowserComponent } from './unsupported-browser/unsupported-browser.component';

const routes: Routes = [
  {path: "unsupported", component: UnsupportedBrowserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
