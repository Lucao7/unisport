import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

import { SportRoutingModule } from './sport-routing.module';
import { DialogCreateSportComponent } from './dialog-create-sport/dialog-create-sport.component';
import { DialogEditSportComponent } from './dialog-edit-sport/dialog-edit-sport.component';
import { DialogDeleteSportComponent } from './dialog-delete-sport/dialog-delete-sport.component';
import { SportComponent } from './sport.component';


@NgModule({
  declarations: [
    SportComponent,
    DialogCreateSportComponent,
    DialogEditSportComponent,
    DialogDeleteSportComponent
  ],
  imports: [
    CommonModule,
    SportRoutingModule,
    AngularMaterialModule
  ]
})
export class SportModule { }
