import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogCreateChampionshipComponent } from './dialog-create-championship/dialog-create-championship.component';
import { DialogEditChampionshipComponent } from './dialog-edit-championship/dialog-edit-championship.component';
import { DialogDeleteChampionshipComponent } from './dialog-delete-championship/dialog-delete-championship.component';

export interface PeriodicElement {
  id: number;
  descricao: string;
  qtd_times_inscritos: string;
  esporte: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    descricao: 'campeonato 1',
    qtd_times_inscritos: '5/10',
    esporte: 'Futebol',
  },
  {
    id: 2,
    descricao: 'campeonato 2',
    qtd_times_inscritos: '4/10',
    esporte: 'Futebol',
  },
  {
    id: 3,
    descricao: 'campeonato 3',
    qtd_times_inscritos: '3/10',
    esporte: 'Futebol',
  },
  {
    id: 4,
    descricao: 'campeonato 4',
    qtd_times_inscritos: '2/10',
    esporte: 'Futebol',
  },
  {
    id: 5,
    descricao: 'campeonato 5',
    qtd_times_inscritos: '1/10',
    esporte: 'Futebol',
  },
  {
    id: 6,
    descricao: 'campeonato 6',
    qtd_times_inscritos: '0/10',
    esporte: 'Futebol',
  },
  {
    id: 7,
    descricao: 'campeonato 7',
    qtd_times_inscritos: '7/10',
    esporte: 'Futebol',
  },
  {
    id: 8,
    descricao: 'campeonato 8',
    qtd_times_inscritos: '8/10',
    esporte: 'Futebol',
  },
  {
    id: 9,
    descricao: 'campeonato 9',
    qtd_times_inscritos: '9/10',
    esporte: 'Futebol',
  },
  {
    id: 10,
    descricao: 'campeonato 10',
    qtd_times_inscritos: '10/10',
    esporte: 'Futebol',
  },
];

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss'],
})
export class ChampionshipComponent {
  constructor(public dialog: MatDialog) {}

  openDialogCreateChampionship(): void {
    const DIALOG_CREATE = this.dialog.open(
      DialogCreateChampionshipComponent
    );

    DIALOG_CREATE.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }


  openDialogEditChampionship(): void {
    const DIALOG_EDIT = this.dialog.open(
      DialogEditChampionshipComponent
    );

    DIALOG_EDIT.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }


  openDialogDeleteChampionship(): void {
    const DIALOG_DELETE = this.dialog.open(
      DialogDeleteChampionshipComponent
    );

    DIALOG_DELETE.afterClosed().subscribe((result) => {
      console.log('O modal foi aberto');
    });
  }

  dataSource = ELEMENT_DATA;
}
