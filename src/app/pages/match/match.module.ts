import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

import { MatchRoutingModule } from './match-routing.module';
import { MatchComponent } from './match.component';


@NgModule({
  declarations: [
    MatchComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    AngularMaterialModule
  ]
})
export class MatchModule { }
