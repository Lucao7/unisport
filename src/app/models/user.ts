export interface User {
  id: number,
  nomeCompleto: string,
  faculdade: {
    id: number,
    nome: string,
  }
}
