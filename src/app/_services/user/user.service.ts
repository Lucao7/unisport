import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { Person } from 'src/app/models/person';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment.development';

import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  getUsers() {
    return this.http.get<User[]>(environment.userUrl);
  }

  getCurrentUser(): User {
    return this.storageService.getUser();
  }

  getPlayers() {
    return this.http.get<Person[]>(environment.userUrl);
  }

  deleteAccount() {
    return this.http.delete(environment.authUrl)
    .pipe(map(() => {
      this.authService.logout();
    }));
  }
}
