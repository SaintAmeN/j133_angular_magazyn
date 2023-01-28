import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NavigatorComponent,
    ContentContainerComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
