import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../shared/notification/notification.component';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
          let errorMsg = '';

          if (error.error instanceof ErrorEvent) {
              errorMsg = `Error: ${error.error.message}`;
              this._snackBar.open(`${error.error}`, 'CLose', {
                horizontalPosition: 'end',
                verticalPosition: 'top',
              });
          } else {
              errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
              this._snackBar.open(`${error.error}`, 'Close', {
                horizontalPosition: 'end',
                verticalPosition: 'top',
              });
          }
          return throwError(() => errorMsg);
        })
    );
  }
}
