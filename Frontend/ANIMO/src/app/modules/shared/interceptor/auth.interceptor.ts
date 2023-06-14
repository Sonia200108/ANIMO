import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { AccountService } from '../services/account.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private acc: AccountService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.acc.getToken();
        const requestclone = req.clone({
            headers: req.headers.set('Authorization',`Bearer ${token}`)
          });

        return next.handle(requestclone).pipe(catchError((err) => this.errorHandler(err)));
    }

    errorHandler(error: HttpErrorResponse) {
      if (error.status === 401) {
          this.acc.logout(false);
          return of();
      } else {
        console.log(error.error)
        return throwError(() => error);
      }
    }
}

export const HttpAuthInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
