import { ChampionshipStatus } from './championshipStatus';
import { Modality } from './modality';
import { ChampionshipType } from './championshipType';
import { Inscription } from './inscription';
import { Person } from './person';
import { Match } from './match';

export interface Championship {
  id: number;
  nome: string;
  tipoCampeonato: ChampionshipType;
  modalidadeCampeonato: Modality;
  statusCampeonato: ChampionshipStatus;
  dataInicio: Date;
  dataFim: Date;
  organizador: Person;
  inscricao: Inscription;
  quantidadeRodadas: number;
  partidas?: Match[];
}
