import { Team } from './team';

export interface Match {
  id: number;
  campeonatoId: number;
  equipeA: Team;
  equipeAId: number;
  equipeB: Team;
  equipeBId: number;
  equipeVencedora: Team;
  equipeVencedoraId: number;
  dataInicio: Date;
  dataFim: Date;
  proximaPartida: string;
  rodada: number;
}
