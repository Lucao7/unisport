import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { College } from 'src/app/models/college';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(
    private http: HttpClient,
  ) { }

  getColleges() {
    return this.http.get<College[]>(environment.collegeUrl);
  }

  deleteCollege(id: number) {
    return this.http.delete(environment.collegeUrl + `/${id}`);
  }
}
