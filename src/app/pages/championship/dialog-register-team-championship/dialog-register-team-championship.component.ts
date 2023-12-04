import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChampionshipService } from 'src/app/_services/championship/championship.service';
import { TeamService } from 'src/app/_services/team/team.service';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-dialog-register-team-championship',
  templateUrl: './dialog-register-team-championship.component.html',
  styleUrls: ['./dialog-register-team-championship.component.scss']
})
export class DialogRegisterTeamChampionshipComponent implements OnInit {

  id: number = 0;
  teams: Team[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogRegisterTeamChampionshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private toast: ToastrService,
    private teamService: TeamService,
    private championshipService: ChampionshipService
  ) {
    this.id = data;
  }

  newCompetitorForm: FormGroup = new FormGroup({
    team: new FormControl(null, [Validators.required])
  });

  get f() { return this.newCompetitorForm.controls; };

  ngOnInit(): void {
    this.listTeamsTypes();
  }

  listTeamsTypes(): Team[] {
    this.teamService.listTeam().subscribe({
      next: (data) => {
        this.teams = data;
      },
      error: (error) => {
        console.error(error);
        this.toast.error(error);
      },
    });

    return this.teams;
  }

  insertTeam() {
    if (this.newCompetitorForm.invalid) {
      this.toast.warning('Preencha todos os campos!');
      return;
    }

    this.championshipService.insertTeam(this.data, this.f['team'].value).subscribe({
      next: (data) => {
        this.toast.success('Time inscrito com sucesso!', 'Ok', {
          timeOut: 3000,
        });
        setTimeout(() => window.location.reload(), 3300);
      },
      error: (error) => {
        console.error(error);
        this.toast.error(error.error.title, 'Erro', { timeOut: 3000 });
      },
    });
  }

}
