import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  campeonato: string;
  time1: string;
  time2: string;
  resultado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, campeonato: 'campeonato 1', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 2, campeonato: 'campeonato 2', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 3, campeonato: 'campeonato 3', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 4, campeonato: 'campeonato 4', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 5, campeonato: 'campeonato 5', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 6, campeonato: 'campeonato 6', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 7, campeonato: 'campeonato 7', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 8, campeonato: 'campeonato 8', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 9, campeonato: 'campeonato 9', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
  { id: 10, campeonato: 'campeonato 10', time1: 'Time A', time2: 'Time B', resultado: '3 X 0' },
];

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  dataSource = ELEMENT_DATA;
}
