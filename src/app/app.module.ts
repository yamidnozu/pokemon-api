import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PkButtonModule } from 'pk-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PkButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
