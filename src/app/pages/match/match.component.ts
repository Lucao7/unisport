import { Component } from '@angular/core';

export interface PeriodicElement {
  id: number;
  time1: string;
  time2: string;
  vencedor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 2, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 3, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 4, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 5, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 6, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 7, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 8, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 9, time1: 'Time A', time2: 'Time B', vencedor: '-' },
  { id: 10, time1: 'Time A', time2: 'Time B', vencedor: '-' },
];

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {
  dataSource = ELEMENT_DATA;
}
