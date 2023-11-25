import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

import { ChampionshipRoutingModule } from './championship-routing.module';
import { ChampionshipComponent } from './championship.component';
import { DialogCreateChampionshipComponent } from './dialog-create-championship/dialog-create-championship.component';


@NgModule({
  declarations: [
    ChampionshipComponent,
    DialogCreateChampionshipComponent
  ],
  imports: [
    CommonModule,
    ChampionshipRoutingModule,
    AngularMaterialModule,
  ]
})
export class ChampionshipModule { }
