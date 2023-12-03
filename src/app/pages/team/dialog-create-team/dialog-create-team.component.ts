import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from './../../../_services/user/user.service';
import { TeamService } from './../../../_services/team/team.service';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-dialog-create-team',
  templateUrl: './dialog-create-team.component.html',
  styleUrls: ['./dialog-create-team.component.scss']
})
export class DialogCreateTeamComponent implements OnInit{

  players: Person[] = [];

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.listPlayers();
  }

  listPlayers(): Person[] {
    this.userService.getPlayers().subscribe({
      next: (data) => {
      this.players = data;
      },
      error: (error) => {
        console.error(error);
        this.toast.error(error);
      },
    });

    return this.players;
  }

  teamForm: FormGroup = new FormGroup({
    teamName: new FormControl('', [Validators.required]),
    player1: new FormControl(null, [Validators.required]),
    player2: new FormControl(null, [Validators.required]),
    player3: new FormControl(null, [Validators.required]),
    player4: new FormControl(null, [Validators.required]),
    player5: new FormControl(null, [Validators.required])
  });

  get f() { return this.teamForm.controls; };

  postTeam() {
    if (this.teamForm.invalid) {
      this.toast.warning('Preencha todos os campos!');
      return;
    }

    console.log('teste')

    const team = {
      nome: this.f['teamName'].value,
      jogadoresId: [this.f['player1'].value, this.f['player2'].value, this.f['player3'].value, this.f['player4'].value, this.f['player5'].value]
    }

    console.log(team)

    this.teamService.createTeam(team).subscribe({
      next: (data) => {
        this.toast.success('Time criado com sucesso!', 'Ok', { timeOut: 3000 } );
        setTimeout(() => window.location.reload(), 3300);
        },
        error: (error) => {
          console.error(error);
          this.toast.error(error.error.title, 'Erro', { timeOut: 3000 });
        },
      });
  }
}
