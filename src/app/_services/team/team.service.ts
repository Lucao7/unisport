import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from 'src/app/models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  listTeam(): Observable<Team[]> {
    return this.http.get<Team[]>(`${environment.apiUrl}equipe`);
  }

  createTeam(team: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}equipe`, team);
  }

  deleteTeam(id: number): Observable<Team> {
    return this.http.delete<Team>(`${environment.apiUrl}equipe/${id.toString()}`);
  }

  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(`${environment.apiUrl}equipe/${id.toString()}`);
  }

  updateTeam(team: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}equipe`, team);
  }
}
