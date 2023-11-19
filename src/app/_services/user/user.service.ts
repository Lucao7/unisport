import { AuthService } from 'src/app/_services/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getUsers() {
    return this.http.get<User[]>(environment.userUrl);
  }

  deleteAccount() {
    return this.http.delete(environment.authUrl)
    .pipe(map(() => {
      this.authService.logout();
    }));
  }
}
