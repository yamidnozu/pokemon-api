import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PkmButton } from './pkm-button.component';



@NgModule({
  declarations: [
    PkmButton,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PkmButton
  ]
})
export class PkmButtonModule { }
