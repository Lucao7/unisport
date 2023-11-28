import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateSportComponent } from './dialog-create-sport/dialog-create-sport.component';
import { DialogEditSportComponent } from './dialog-edit-sport/dialog-edit-sport.component';
import { DialogDeleteSportComponent } from './dialog-delete-sport/dialog-delete-sport.component';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent {
  constructor(public dialog: MatDialog) {}

  openDialogCreateSport(): void {
    const DIALOG_CREATE = this.dialog.open(DialogCreateSportComponent);

    DIALOG_CREATE.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }


  openDialogEditSport(): void {
    const DIALOG_EDIT = this.dialog.open(DialogEditSportComponent);

    DIALOG_EDIT.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }


  openDialogDeleteSport(): void {
    const DIALOG_DELETE = this.dialog.open(DialogDeleteSportComponent);

    DIALOG_DELETE.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }
}
