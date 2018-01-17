import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //Import the Angular router module and Routes
import {GoogleAnalyticsService} from "./google-analytics.service"; // import our analytics service


import { AppComponent } from './app.component';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';

export const appRoutes: Routes = [
  {path: '', component: Component1Component},
  {path: 'component-2', component: Component2Component}
];


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [GoogleAnalyticsService], //add it as a provider
  bootstrap: [AppComponent]
})
export class AppModule { }
