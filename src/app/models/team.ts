import { User } from "./user";

export interface Team {
  id: number;
  nome: string;
  gerenteId: User;
  jogadoresId: User[];
}
