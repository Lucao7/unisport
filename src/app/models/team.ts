import { Person } from "./person";

export interface Team {
  id: number;
  nome: string;
  gerenteId: Person;
  jogadores: Person[];
}
