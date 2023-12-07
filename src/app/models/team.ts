import { Person } from "./person";

export interface Team {
  id: number;
  nome: string;
  gerente: Person;
  jogadores: Person[];
}
