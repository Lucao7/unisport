import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Championship } from 'src/app/models/championship';

import { ChampionshipService } from './../../_services/championship/championship.service';
import { DialogCreateChampionshipComponent } from './dialog-create-championship/dialog-create-championship.component';
import { DialogEditChampionshipComponent } from './dialog-edit-championship/dialog-edit-championship.component';
import { DialogDeleteChampionshipComponent } from './dialog-delete-championship/dialog-delete-championship.component';
import { DialogRegisterTeamChampionshipComponent } from './dialog-register-team-championship/dialog-register-team-championship.component';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss'],
})
export class ChampionshipComponent implements OnInit {

  userId: number = 0;
  isAdmin: boolean = false;
  championshipsOpenInscription: Championship[] = [];
  championshipsClosedInscription: Championship[] = [];
  championship = {} as Championship;

  constructor(
    private championshipService: ChampionshipService,
    private userService: UserService,
    public dialog: MatDialog,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.listChampionships();
  }

  getUserInfo(): void {
    this.userId = this.userService.getCurrentUser().id;
    this.isAdmin = this.userService.getCurrentUser().admin;
  }

  listChampionships(): void {
    this.championshipService.listChampionship(true).subscribe({
      next: (data) => {
        this.championshipsOpenInscription = data;
      },
      error: (error) => console.error(error),
    });
    this.championshipService.listChampionship(false).subscribe({
      next: (data) => {
        this.championshipsClosedInscription = data;
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

  generateChampionshipMatches(championshipId: number) {
    this.championshipService.generateMatches(championshipId).subscribe({
      next: (data) => {
        this.toast.success('Partidas geradas com sucesso!', 'Ok');
      },
      error: (error) => console.error(error),
    });
  }

  openDialogCreateChampionship(): void {
    const DIALOG_CREATE = this.dialog.open(DialogCreateChampionshipComponent, {
      width: '50dvw'
    });
  }

  openDialogEditChampionship(championship: any): void {
    const DIALOG_EDIT = this.dialog.open(DialogEditChampionshipComponent, {
      width: '50dvw',
      data: championship
    });
  }

  openDialogDeleteChampionship(id: number): void {
    const DIALOG_DELETE = this.dialog.open(DialogDeleteChampionshipComponent, {
      width: '50dvw',
      data: id
    });
  }

  openDialogRegisterTeamChampionship(id: number): void {
    const DIALOG_REGISTER_TEAM = this.dialog.open(DialogRegisterTeamChampionshipComponent, {
      width: '50dvw',
      data: id
    });
  }

}
