import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Championship } from 'src/app/models/championship';
import { environment } from 'src/environments/environment';

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

  createChampionship(championship: Championship): Observable<Championship> {
    return this.http.post<Championship>(
      `${environment}/api/campeonato`,
      championship
    );
  }
}
