import { ChampionshipStatus } from './championshipStatus';
import { Modality } from './modality';
import { ChampionshipType } from './championshipType';
import { Inscription } from './inscription';
import { Organizer } from './organizer';

export interface Championship {
  id: number;
  nome: string;
  tipoCampeonato: ChampionshipType;
  modalidadeCampeonato: Modality;
  statusCampeonato: ChampionshipStatus;
  dataInicio: Date;
  dataFim: Date;
  organizador: Organizer;
  inscricao: Inscription;
}
