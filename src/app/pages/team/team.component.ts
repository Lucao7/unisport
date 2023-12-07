import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/_services/user/user.service';
import { Team } from 'src/app/models/team';

import { TeamService } from './../../_services/team/team.service';
import { DialogCreateTeamComponent } from './dialog-create-team/dialog-create-team.component';
import { DialogDeleteTeamComponent } from './dialog-delete-team/dialog-delete-team.component';
import { DialogEditTeamComponent } from './dialog-edit-team/dialog-edit-team.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  userId: number = 0;
  isAdmin: boolean = false;
  teams: Team[] = [];
  team = {} as Team;

  constructor(
    private teamService: TeamService,
    private userService: UserService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.listTeam();
  }

  teste(element: any) {
    console.log(element);
  }

  getUserInfo(): void {
    this.userId = this.userService.getCurrentUser().id;
    this.isAdmin = this.userService.getCurrentUser().admin;
  }

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
