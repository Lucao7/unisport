import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogDefineWinnerComponent } from './dialog-define-winner/dialog-define-winner.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent {
  constructor(public dialog: MatDialog) {}

  openDialogDefineWinner(): void {
    const DIALOG_DEFINE_WINNER = this.dialog.open(DialogDefineWinnerComponent);

    DIALOG_DEFINE_WINNER.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }
}
