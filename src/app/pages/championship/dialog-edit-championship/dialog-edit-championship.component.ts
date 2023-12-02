import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ChampionshipService } from 'src/app/_services/championship/championship.service';
import { ChampionshipType } from 'src/app/models/championshipType';
import { Modality } from 'src/app/models/modality';

@Component({
  selector: 'app-dialog-edit-championship',
  templateUrl: './dialog-edit-championship.component.html',
  styleUrls: ['./dialog-edit-championship.component.scss'],
})
export class DialogEditChampionshipComponent implements OnInit {

  editForm: FormGroup;
  championshipTypes: ChampionshipType[] = [];
  championshipModality: Modality[] = [];
  idToEdit: number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogEditChampionshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private championshipService: ChampionshipService,
    private toast: ToastrService
  ) {
    this.idToEdit = data.id;
    this.editForm = new FormGroup({
      nome: new FormControl(data.nome, [Validators.required]),
      tipoId: new FormControl(data.tipoId, [Validators.required]),
      modalidadeId: new FormControl(data.modalidadeCampeonato.id, [
        Validators.required,
      ]),
      dataInicio: new FormControl(data.dataInicio, [Validators.required]),
      dataFim: new FormControl(data.dataFim, [Validators.required]),
      dataInicioInscricao: new FormControl(data.inscricao.dataInicio, [
        Validators.required,
      ]),
      dataFimInscricao: new FormControl(data.inscricao.dataFim, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.listChampionshipTypes();
    this.listChampionshipModality();
  }

  listChampionshipTypes(): ChampionshipType[] {
    this.championshipService.listChampionshipType().subscribe({
      next: (data) => {
        this.championshipTypes = data;
      },
      error: (error) => {
        console.error(error);
        this.toast.error(error);
      },
    });

    return this.championshipTypes;
  }

  listChampionshipModality(): Modality[] {
    this.championshipService.listChampionshipModality().subscribe({
      next: (data) => {
        this.championshipModality = data;
      },
      error: (error) => {
        console.error(error);
        this.toast.error(error);
      },
    });

    return this.championshipModality;
  }

  putChampionship(): void {
    if (this.editForm.invalid) this.toast.warning('Preencha todos os campos!');

    const championship = {
      id: this.idToEdit,
      nome: this.editForm.value.nome,
      tipoId: this.editForm.value.tipoId,
      modalidadeId: this.editForm.value.modalidadeId,
      dataInicio: this.editForm.value.dataInicio,
      dataFim: this.editForm.value.dataFim,
      dataInicioInscricao: this.editForm.value.dataInicioInscricao,
      dataFimInscricao: this.editForm.value.dataFimInscricao,
      organizadorId: 1,
    };

    this.championshipService.updateChampionship(championship).subscribe({
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
