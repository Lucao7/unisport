import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogCreateTeamComponent } from './dialog-create-team/dialog-create-team.component';
import { DialogEditTeamComponent } from './dialog-edit-team/dialog-edit-team.component';
import { DialogDeleteTeamComponent } from './dialog-delete-team/dialog-delete-team.component';

import { Team } from 'src/app/models/team';

import { TeamService } from './../../_services/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teams: Team[] = [];
  team = {} as Team;

  constructor(
    private teamService: TeamService,
    public dialog: MatDialog,
  ) {}

  listTeam(): void {
    this.teamService.listTeam().subscribe({
      next: (data) => {
        this.teams = data;
      },
      error: (error) => console.error(error),
    });
  }

  getTeamById(id: number) {
    this.teamService.getTeamById(id).subscribe(teamRow => {
      this.openDialogEditTeam(teamRow);
    })

    return this.team;
  }

  ngOnInit(): void {
    this.listTeam();
  }

  openDialogCreateTeam(): void {
    const DIALOG_CREATE = this.dialog.open(DialogCreateTeamComponent, {
      width: '50dvw',
    });

    DIALOG_CREATE.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado');
    });
  }


  openDialogEditTeam(team: any): void {
    const DIALOG_EDIT = this.dialog.open(DialogEditTeamComponent, {
      width: '50dvw',
      data: team
    });

    DIALOG_EDIT.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado');
    });
  }


  openDialogDeleteTeam(id: number): void {
    const DIALOG_DELETE = this.dialog.open(DialogDeleteTeamComponent, {
      data: id
    });

    DIALOG_DELETE.afterClosed().subscribe((result) => {
      console.log('O modal foi fechado');
    });
  }
}
