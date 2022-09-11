import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCardsComponent } from './container-cards.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    ContainerCardsComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    // CardModule,
  ],
  exports: [
    ContainerCardsComponent
  ]
})
export class ContainerCardsModule { }
