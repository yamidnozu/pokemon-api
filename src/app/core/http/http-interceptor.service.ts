import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.error instanceof ErrorEvent) {
            console.error('An error occurred:', err.error.message);
          } else {
            console.error(
              `Backend returned code ${err.status}, ` +
              `body was: ${err.error}`);
          }
          return throwError(() => err);
        }),
        finalize(() => { }),
      );
  }
}
