import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { StorageService } from '../storage/storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject<boolean>(this.storageService.isLoggedIn());

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router,
  ) {}

  get isLoggedIn() {
    return this._isLoggedIn['_value'];
  }

  login(email: string, password: string): Observable<any> {
    const data = {
      "email": email,
      "password": password,
    }
    return this.http.post(environment.authUrl + '/login', data, httpOptions)
    .pipe(map(data => {
      this._isLoggedIn.next(true);
      this.storageService.setToken(data);
    }));
  }

  register(name: string, firstname: string, email: string, birthday: string, password: string): Observable<any> {
    const data = {
      "nome": name,
      "sobrenome": firstname,
      "email": email,
      "dataNascimento": birthday,
      "password": password,
    }
    return this.http.post(environment.authUrl, data, httpOptions);
  }

  logout()/*: Observable<any>*/ {
    // return this.http.post(environment.authUrl + '/logout', { }, httpOptions).pipe(map(data => {
      this._isLoggedIn.next(false);
      this.storageService.clean();
      this.router.navigate(['/login']);
    // }));
  }
}
