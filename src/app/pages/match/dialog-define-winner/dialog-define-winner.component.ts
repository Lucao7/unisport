import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChampionshipService } from 'src/app/_services/championship/championship.service';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-dialog-define-winner',
  templateUrl: './dialog-define-winner.component.html',
  styleUrls: ['./dialog-define-winner.component.scss']
})
export class DialogDefineWinnerComponent {

  winnerForm: FormGroup;
  teams: Team[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogDefineWinnerComponent>,
    private championshipService: ChampionshipService,
    private toast: ToastrService
  ) {
    this.winnerForm = new FormGroup({
      winner: new FormControl(null, [Validators.required])
    });
    this.teams.push(data.equipeA, data.equipeB)
  }

  get f() { return this.winnerForm.controls; };

  selectWinner(): void {
    if (this.winnerForm.invalid) {
      this.toast.warning('Preencha todos os campos!');
      return;
    }

    const matchWinner = {
      partidaId: this.data.id,
      equipeId: this.f['winner'].value,
    }

    this.championshipService.selectMatchWinner(matchWinner).subscribe({
      next: (data) => {
        this.toast.success('Vencedor selecionado com sucesso!', 'Ok', {
          timeOut: 3000,
        });
        setTimeout(() => window.location.reload(), 3300);
      },
      error: (error) => {
        console.error(error);
        error.error.mensagensErro.forEach((erro: string | undefined) => {
          this.toast.error(erro, error.status + ' - ' + error.statusText, { timeOut: 3000 });
        });
      },
    });
  }

}
