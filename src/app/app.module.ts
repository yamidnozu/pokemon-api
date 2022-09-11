import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PkmButtonModule, PkmFavButtonModule, PkmTopBarModule } from 'pkm-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { IconNotificationModule } from './ui/atoms/icon-notification/icon-notification.module';
import { CardModule } from './ui/molecules/card/card.module';
import { ContainerCardsModule } from './ui/templates/container-cards/container-cards.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    PkmFavButtonModule,
    PkmTopBarModule,
    PkmButtonModule,
    ContainerCardsModule,
    CoreModule,
    IconNotificationModule,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
