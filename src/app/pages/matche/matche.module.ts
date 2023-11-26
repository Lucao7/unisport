import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

import { MatcheRoutingModule } from './matche-routing.module';
import { DialogDefineWinnerComponent } from './dialog-define-winner/dialog-define-winner.component';
import { MatcheComponent } from './matche.component';


@NgModule({
  declarations: [
    MatcheComponent,
    DialogDefineWinnerComponent
  ],
  imports: [
    CommonModule,
    MatcheRoutingModule,
    AngularMaterialModule
  ]
})
export class MatcheModule { }
