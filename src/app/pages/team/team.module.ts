import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { DialogCreateTeamComponent } from './dialog-create-team/dialog-create-team.component';
import { DialogEditTeamComponent } from './dialog-edit-team/dialog-edit-team.component';
import { DialogDeleteTeamComponent } from './dialog-delete-team/dialog-delete-team.component';


@NgModule({
  declarations: [
    TeamComponent,
    DialogCreateTeamComponent,
    DialogEditTeamComponent,
    DialogDeleteTeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeamModule { }
