import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

import { ChampionshipRoutingModule } from './championship-routing.module';
import { ChampionshipComponent } from './championship.component';
import { DialogCreateChampionshipComponent } from './dialog-create-championship/dialog-create-championship.component';
import { DialogEditChampionshipComponent } from './dialog-edit-championship/dialog-edit-championship.component';
import { DialogDeleteChampionshipComponent } from './dialog-delete-championship/dialog-delete-championship.component';
import { DialogRegisterTeamChampionshipComponent } from './dialog-register-team-championship/dialog-register-team-championship.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChampionshipComponent,
    DialogCreateChampionshipComponent,
    DialogEditChampionshipComponent,
    DialogDeleteChampionshipComponent,
    DialogRegisterTeamChampionshipComponent
  ],
  imports: [
    CommonModule,
    ChampionshipRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ChampionshipModule { }
