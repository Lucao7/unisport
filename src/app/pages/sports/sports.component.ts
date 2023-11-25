import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  descricao: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, descricao: 'Futebol' },
  { id: 2, descricao: 'Basquete' },
  { id: 3, descricao: 'Handebol' },
  { id: 4, descricao: 'Futsal' },
  { id: 5, descricao: 'Vôlei' },
];

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent {
  dataSource = ELEMENT_DATA;
}
