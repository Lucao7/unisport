import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Championship } from 'src/app/models/championship';
import { ChampionshipType } from 'src/app/models/championshipType';
import { Modality } from 'src/app/models/modality';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChampionshipService {
  constructor (
    private http: HttpClient,
    private router: Router,
  ) { }

  listChampionship(): Observable<Championship[]> {
    return this.http.get<Championship[]>(`${environment.championshipUrl}`);
  }

  createChampionship(championship: any): Observable<any> {
    return this.http.post<any>(`${environment.championshipUrl}`, championship);
  }

  listChampionshipType(): Observable<ChampionshipType[]> {
    return this.http.get<ChampionshipType[]>(`${environment.championshipUrl}/tipo`);
  }

  listChampionshipModality(): Observable<Modality[]> {
    return this.http.get<Modality[]>(`${environment.championshipUrl}/modalidade`);
  }

  deleteChampionship(id: number): Observable<Championship> {
    return this.http.delete<Championship>(`${environment.championshipUrl}/${id.toString()}`);
  }

  getChampionshipById(id: number): Observable<Championship> {
    return this.http.get<Championship>(`${environment.championshipUrl}/${id.toString()}`);
  }

  updateChampionship(championship: any): Observable<any> {
    return this.http.put<any>(`${environment.championshipUrl}`, championship);
  }

  insertTeam(championshipId: number, teamId: number): Observable<any> {
    const newCompetitor = {
      campeonatoId: championshipId,
      equipeId: teamId
    };
    return this.http.put<any>(`${environment.championshipUrl}/inscrever`, newCompetitor);
  }

  generateMatches(championshipId: number): Observable<any> {
    return this.http.post<any>(`${environment.championshipUrl}/gerar-partidas/${championshipId.toString()}`, null)
    .pipe(map(data => {
      this.router.navigate(['/partida/', championshipId]);
    }));
  }
}
