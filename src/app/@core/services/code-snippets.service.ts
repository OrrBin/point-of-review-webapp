import { Injectable } from '@angular/core';
import { of as observableOf, Observable, throwError } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
import { CodeSnippetsData } from '../data/code-snippets';
import { CodeSnippet } from '../lib/objects/code-snippet';
import { Code } from '../lib/objects/code';
import { Score } from '../lib/objects/score';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CodeReview } from '../lib/objects/code-review';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CodeSnippetsService extends CodeSnippetsData {
  constructor(private http: HttpClient) {
    super();
  }

  getCodeSnippets(): Observable<CodeSnippet[]> {
    return this.http.get<CodeSnippet[]>('http://localhost:8080/snippets/popular');
  }

  postSnippet(snippet: CodeSnippet): Observable<CodeSnippet> {
    console.log('sending post request for snippet:');
    console.log(snippet);
    return this.http.post<CodeSnippet>('http://localhost:8080/snippets', snippet, httpOptions)
      .pipe(
        catchError(this.handleError)
      );


  }

  postReview(review: CodeReview): Observable<CodeReview> {
    console.log('sending post request for review:');
    return this.http.post<CodeReview>('http://localhost:8080/reviews', review, httpOptions)
      .pipe(
        catchError(this.handleError)
      );


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
  };
}