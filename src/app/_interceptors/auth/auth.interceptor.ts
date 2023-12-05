import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../../_services/auth/auth.service';
import { StorageService } from '../../_services/storage/storage.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private toast: ToastrService,
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.storageService.getToken();

    if (token.token) {
      request = request.clone({ setHeaders: { Authorization: token.token } });
    }
    return next.handle(request).pipe(tap(
      event => { },
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            this.toast.error("Usuário não autorizado","Negado");
            this.router.navigate(['/login']);
          }
        }
      })
    );
  }
}

export const AuthInterceptorProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
];
