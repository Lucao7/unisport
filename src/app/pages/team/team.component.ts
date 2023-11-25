import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  nome: string;
  descricao: string;
  faculdade: string;
  integrantes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, nome: 'Time A', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 2, nome: 'Time B', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 3, nome: 'Time C', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 4, nome: 'Time D', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 5, nome: 'Time E', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 6, nome: 'Time F', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 7, nome: 'Time G', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 8, nome: 'Time H', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 9, nome: 'Time I', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
  { id: 10, nome: 'Time J', descricao: 'Time de x modalidade', faculdade: 'FATEC', integrantes: '3/5' },
];

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  dataSource = ELEMENT_DATA;
}
