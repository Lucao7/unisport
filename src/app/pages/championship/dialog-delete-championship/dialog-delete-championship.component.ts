import { ChampionshipService } from 'src/app/_services/championship/championship.service';
import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-championship',
  templateUrl: './dialog-delete-championship.component.html',
  styleUrls: ['./dialog-delete-championship.component.scss'],
})
export class DialogDeleteChampionshipComponent {
  idToDelete: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteChampionshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private toast: ToastrService,
    private championshipService: ChampionshipService
  ) {
    this.idToDelete = data;
  }

  deleteChampionship(): void {
    this.championshipService.deleteChampionship(this.idToDelete).subscribe({
      next: (data) => {
        this.toast.success('Campeonato deletado com sucesso!', 'Ok', {
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
