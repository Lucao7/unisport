import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './sports.component';


@NgModule({
  declarations: [
    SportsComponent
  ],
  imports: [
    CommonModule,
    SportsRoutingModule,
    AngularMaterialModule
  ]
})
export class SportsModule { }
