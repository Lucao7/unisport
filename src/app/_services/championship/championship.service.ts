import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Championship } from 'src/app/models/championship';
import { environment } from 'src/environments/environment';
import { ChampionshipType } from 'src/app/models/championshipType';
import { Modality } from 'src/app/models/modality';

@Injectable({
  providedIn: 'root',
})
export class ChampionshipService {
  constructor(private http: HttpClient) {}

  listChampionship(
    tipoId: number,
    modalidadeId: number,
    inscricoesAbertas: boolean
  ): Observable<Championship[]> {
    let params = new HttpParams()
      .set('tipoId', tipoId.toString())
      .set('modalidadeId', modalidadeId.toString())
      .set('incricoesAbertas', inscricoesAbertas.toString());

    return this.http.get<Championship[]>(`${environment.apiUrl}campeonato`, {
      params,
    });
  }

  createChampionship(championship: any): Observable<any> {
    return this.http.post<any>(
      `${environment.apiUrl}campeonato`,
      championship
    );
  }

  listChampionshipType(): Observable<ChampionshipType[]> {
    return this.http.get<ChampionshipType[]>(`${environment.apiUrl}campeonato/tipo`);
  }

  listChampionshipModality(): Observable<Modality[]> {
    return this.http.get<Modality[]>(`${environment.apiUrl}campeonato/modalidade`);
  }

  deleteChampionship(): Observable<Championship> {
    return this.http.delete<Championship>(`${environment.apiUrl}campeonato/delete`)
  }
}
