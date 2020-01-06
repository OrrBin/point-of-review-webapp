import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../lib/objects/user';
import { catchError } from 'rxjs/operators';
import { AuthenticationRequest } from '../lib/objects/authentication-request';
import { CodeSnippet } from '../lib/objects/code-snippet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(request: AuthenticationRequest): Observable<User> {
    return this.http.post<User>('http://localhost:8080/login', request, httpOptions)
      .pipe(catchError(this.handleError));
  }

  register(request: AuthenticationRequest): Observable<User> {
    return this.http.post<User>('http://localhost:8080/register', request, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}