import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { PkmButtonModule } from 'pkm-button';
import { CardModule } from 'src/app/ui/molecules/card/card.module';
import { ContainerCardsModule } from 'src/app/ui/templates/container-cards/container-cards.module';
import { GoBackButtonModule } from 'src/app/ui/atoms/go-back-button/go-back-button.module';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    ContainerCardsModule,
    CardModule,
    PkmButtonModule,
    GoBackButtonModule,
  ]
})
export class FavoritesModule { }
