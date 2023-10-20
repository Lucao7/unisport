import { AuthService } from 'src/app/_services/auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  deleteAccount() {
    return this.http.delete(environment.authUrl)
    .pipe(map(() => {
      this.authService.logout();
    }))
  }
}
