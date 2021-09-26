import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, filter, map, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(retry(2), catchError((error: HttpErrorResponse) => {

      let errorMsg = `Error Code: ${error.error.statusCode},  Message: ${error.error.message}`;
      console.log(error.error);
      alert(errorMsg)
      return throwError(() => new Error());
    }));
  }
}
