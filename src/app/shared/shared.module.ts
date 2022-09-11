import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilledidPipe } from './pipes/filledid.pipe';



@NgModule({
  declarations: [
    FilledidPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilledidPipe
  ]
})
export class SharedModule { }
