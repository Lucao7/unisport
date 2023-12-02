import { TeamService } from 'src/app/_services/team/team.service';
import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-team',
  templateUrl: './dialog-delete-team.component.html',
  styleUrls: ['./dialog-delete-team.component.scss']
})
export class DialogDeleteTeamComponent {
  idToDelete: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private toast: ToastrService,
    private teamService: TeamService
  ) {
    this.idToDelete = data;
  }

  deleteTeam(): void {
    this.teamService.deleteTeam(this.idToDelete).subscribe({
      next: (data) => {
        this.toast.success('Time deletado com sucesso!', 'Ok', {
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
