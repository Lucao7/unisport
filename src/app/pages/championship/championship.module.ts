import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

import { ChampionshipRoutingModule } from './championship-routing.module';
import { ChampionshipComponent } from './championship.component';


@NgModule({
  declarations: [
    ChampionshipComponent
  ],
  imports: [
    CommonModule,
    ChampionshipRoutingModule,
    AngularMaterialModule
  ]
})
export class ChampionshipModule { }
