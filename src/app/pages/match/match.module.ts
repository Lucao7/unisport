import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatchRoutingModule } from './match-routing.module';
import { DialogDefineWinnerComponent } from './dialog-define-winner/dialog-define-winner.component';
import { MatchComponent } from './match.component';


@NgModule({
  declarations: [
    MatchComponent,
    DialogDefineWinnerComponent
  ],
  imports: [
    CommonModule,
    MatchRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MatchModule { }
