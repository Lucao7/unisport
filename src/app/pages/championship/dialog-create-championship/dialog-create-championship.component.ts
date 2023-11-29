import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

import { ChampionshipService } from './../../../_services/championship/championship.service';
import { ToastrService } from 'ngx-toastr';

import { ChampionshipType } from 'src/app/models/championshipType';
import { Modality } from 'src/app/models/modality';

@Component({
  selector: 'app-dialog-create-championship',
  templateUrl: './dialog-create-championship.component.html',
  styleUrls: ['./dialog-create-championship.component.scss'],
})
export class DialogCreateChampionshipComponent implements OnInit{

  championshipTypes: ChampionshipType[] = []
  championshipModality: Modality[] = []

  postChampionshipForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    tipoId: new FormControl(null, [Validators.required]),
    modalidadeId: new FormControl(null, [Validators.required]),
    dataInicio: new FormControl(null, [Validators.required]),
    dataFim: new FormControl(null, [Validators.required]),
    dataInicioInscricao: new FormControl(null, [Validators.required]),
    dataFimInscricao: new FormControl(null, [Validators.required]),
  });

  constructor(
    private championshipService: ChampionshipService,
    private toast: ToastrService
  ) {}


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

  postChampionship() {
    if (this.postChampionshipForm.invalid)
      this.toast.warning('Preencha todos os campos!');

    const championship = {
      nome: this.postChampionshipForm.value.nome,
      tipoId: this.postChampionshipForm.value.tipoId,
      modalidadeId: this.postChampionshipForm.value.modalidadeId,
      dataInicio: this.postChampionshipForm.value.dataInicio,
      dataFim: this.postChampionshipForm.value.dataFim,
      dataInicioInscricao: this.postChampionshipForm.value.dataInicioInscricao,
      dataFimInscricao: this.postChampionshipForm.value.dataFimInscricao,
      organizadorId: 1
    }

    this.championshipService.createChampionship(championship).subscribe({
      next: (data) => {
        this.toast.success('Campeonato criado com sucesso!', 'Ok', { timeOut: 3000 } );
        setTimeout(() => window.location.reload(), 3300);
        },
        error: (error) => {
          console.error(error);
          this.toast.error(error.error.title, 'Erro', { timeOut: 3000 });
        },
      });
  }

}
