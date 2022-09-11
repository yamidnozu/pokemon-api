import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { PkmFavButtonModule } from 'pkm-button';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    PkmFavButtonModule, 
    SharedModule,
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
