import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmTopBarComponent } from './pkm-top-bar.component';
import { PkmFavButtonModule } from '../pkm-fav-button/pkm-fav-button.module';



@NgModule({
  declarations: [
    PkmTopBarComponent
  ],
  imports: [
    CommonModule,
    PkmFavButtonModule
  ],exports:[
    PkmTopBarComponent
  ]
})
export class PkmTopBarModule { }
