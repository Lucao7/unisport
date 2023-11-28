import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    AngularMaterialModule
  ]
})
export class TeamModule { }
