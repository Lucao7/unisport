import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogCreateChampionshipComponent } from './dialog-create-championship/dialog-create-championship.component';
import { DialogEditChampionshipComponent } from './dialog-edit-championship/dialog-edit-championship.component';
import { DialogDeleteChampionshipComponent } from './dialog-delete-championship/dialog-delete-championship.component';
import { DialogRegisterTeamChampionshipComponent } from './dialog-register-team-championship/dialog-register-team-championship.component';

import { Championship } from 'src/app/models/championship';

import { ChampionshipService } from './../../_services/championship/championship.service';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss'],
})
export class ChampionshipComponent implements OnInit {
  championships: Championship[] = [];
  championship = {} as Championship;

  constructor(
    private championshipService: ChampionshipService,
    public dialog: MatDialog,
  ) {}

  listChampionship(): void {
    this.championshipService.listChampionship().subscribe({
      next: (data) => {
        this.championships = data;
      },
      error: (error) => console.error(error),
    });
  }

  getChampionshipById(id: number) {
    this.championshipService.getChampionshipById(id).subscribe(championshipRow => {
      this.openDialogEditChampionship(championshipRow);
    })

    return this.championship;
  }

  ngOnInit(): void {
    this.listChampionship();
  }

  openDialogCreateChampionship(): void {
    const DIALOG_CREATE = this.dialog.open(DialogCreateChampionshipComponent);

    DIALOG_CREATE.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }

  openDialogEditChampionship(championship: any): void {
    const DIALOG_EDIT = this.dialog.open(DialogEditChampionshipComponent, {
      data: championship
    });

    DIALOG_EDIT.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }

  openDialogDeleteChampionship(id: number): void {
    const DIALOG_DELETE = this.dialog.open(DialogDeleteChampionshipComponent, {
      data: id
    });

    DIALOG_DELETE.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }

  openDialogRegisterTeamChampionship(): void {
    const DIALOG_REGISTER_TEAM = this.dialog.open(
      DialogRegisterTeamChampionshipComponent
    );

    DIALOG_REGISTER_TEAM.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }

}
