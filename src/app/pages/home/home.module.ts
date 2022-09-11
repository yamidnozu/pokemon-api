import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PkmButtonModule } from 'pkm-button';
import { CardModule } from 'src/app/ui/molecules/card/card.module';
import { ContainerCardsModule } from 'src/app/ui/templates/container-cards/container-cards.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContainerCardsModule,
    CardModule,
    PkmButtonModule,
  ]
})
export class HomeModule { }
