import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DialogDefineWinnerComponent } from './dialog-define-winner/dialog-define-winner.component';
import { ChampionshipService } from 'src/app/_services/championship/championship.service';
import { Match } from 'src/app/models/match';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {

  championshipName : string = '';
  matches: Match[] = [];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private championshipService: ChampionshipService
  ) { }

  ngOnInit() {
    let championshipId: any = this.route.snapshot.paramMap.get('id');
    championshipId = parseInt(championshipId);
    this.championshipService.getChampionshipById(championshipId).subscribe({
      next: (data) => {
        this.championshipName = data.nome;
        if (data.partidas)
          this.matches = data.partidas
      },
      error: (error) => console.error(error),
    });
  }

  openDialogDefineWinner(match: Match): void {
    const DIALOG_DEFINE_WINNER = this.dialog.open(DialogDefineWinnerComponent, {
      width: '50dvh',
      data: match
    });
  }
}
