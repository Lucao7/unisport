import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogDefineWinnerComponent } from './dialog-define-winner/dialog-define-winner.component';

@Component({
  selector: 'app-matche',
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.scss'],
})
export class MatcheComponent {
  constructor(public dialog: MatDialog) {}

  openDialogDefineWinner(): void {
    const DIALOG_DEFINE_WINNER = this.dialog.open(DialogDefineWinnerComponent);

    DIALOG_DEFINE_WINNER.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }
}
