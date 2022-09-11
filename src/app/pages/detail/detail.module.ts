import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { PkmButtonModule } from 'pkm-button';
import { GoBackButtonModule } from 'src/app/ui/atoms/go-back-button/go-back-button.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    PkmButtonModule,
    GoBackButtonModule,
    SharedModule
  ]
})
export class DetailModule { }
