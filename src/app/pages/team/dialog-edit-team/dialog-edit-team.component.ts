import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user/user.service';
import { TeamService } from 'src/app/_services/team/team.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-dialog-edit-team',
  templateUrl: './dialog-edit-team.component.html',
  styleUrls: ['./dialog-edit-team.component.scss']
})
export class DialogEditTeamComponent implements OnInit {

  editForm: FormGroup;
  players: Person[] = [];
  idToEdit: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogEditTeamComponent>,
    private teamService: TeamService,
    private userService: UserService,
    private toast: ToastrService
  ) {
    this.idToEdit = data.id;
    this.editForm = new FormGroup({
      teamName: new FormControl(data.nome, [Validators.required]),
      player1: new FormControl(null, [Validators.required]),
      player2: new FormControl(null, [Validators.required]),
      player3: new FormControl(null, [Validators.required]),
      player4: new FormControl(null, [Validators.required]),
      player5: new FormControl(null, [Validators.required])
    });
    for (let index = 0; index < data.jogadores.length; index++) {
      console.log(data.jogadores[index]);
      this.editForm.controls['player'+(index+1)].setValue(data.jogadores[index]['id'])
    }
  }

  get f() { return this.editForm.controls; };

  ngOnInit(): void {
    this.listPlayers();
    console.log(this.data)
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

  putTeam(): void {
    if (this.editForm.invalid) {
      this.toast.warning('Preencha todos os campos!');
      return;
    }

    const team = {
      nome: this.f['teamName'].value,
      gerenteId: this.data.gerente['id'],
      jogadoresId: [this.f['player1'].value, this.f['player2'].value, this.f['player3'].value, this.f['player4'].value, this.f['player5'].value]
    }

    this.teamService.updateTeam(team).subscribe({
      next: (data) => {
        this.toast.success('Campeonato atualizado com sucesso!', 'Ok', {
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
