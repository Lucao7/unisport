import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DialogDefineWinnerComponent } from './dialog-define-winner/dialog-define-winner.component';
import { ChampionshipService } from 'src/app/_services/championship/championship.service';
import { Match } from 'src/app/models/match';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {

  userId: number = 0;
  isAdmin: boolean = false;
  championshipName: string = '';
  championshipOwnerId: number = 0;
  matches: Match[] = [];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private championshipService: ChampionshipService,
    private userService: UserService
  ) { }

  ngOnInit() {
    let championshipId: any = this.route.snapshot.paramMap.get('id');
    championshipId = parseInt(championshipId);
    this.championshipService.getChampionshipById(championshipId).subscribe({
      next: (data) => {
        this.championshipName = data.nome;
        this.championshipOwnerId = data.organizador.id;
        if (data.partidas)
          this.matches = data.partidas
      },
      error: (error) => console.error(error),
    });
  }

  getUserInfo(): void {
    this.userId = this.userService.getCurrentUser().id;
    this.isAdmin = this.userService.getCurrentUser().admin;
    console.log(this.userId, this.isAdmin)
  }

  openDialogDefineWinner(match: Match): void {
    const DIALOG_DEFINE_WINNER = this.dialog.open(DialogDefineWinnerComponent, {
      width: '50dvh',
      data: match
    });
  }
}
