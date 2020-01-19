import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CodeSnippetsData } from '../data/code-snippets';
import { CodeSnippet } from '../lib/objects/code-snippet';
import { Code } from '../lib/objects/code';
import { Score } from '../lib/objects/score';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CodeReview } from '../lib/objects/code-review';
import { Impression } from '../lib/objects/impression';
import { ImpressionRequest } from '../lib/objects/impression-request';
import { Tag } from '../lib/objects/tag';
import { User } from '../lib/objects/user';

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

  getRecentSnippets(): Observable<CodeSnippet[]> {
    return this.http.get<CodeSnippet[]>('http://localhost:8080/snippets/recent');
  }

  getPopularSnippets(): Observable<CodeSnippet[]> {
    return this.http.get<CodeSnippet[]>('http://localhost:8080/snippets/popular');
  }

  getRecommendedSnippets(username: string): Observable<CodeSnippet[]> {
    return this.http.get<CodeSnippet[]>(`http://localhost:8080/snippets/recommended/${username}`);
  }

  getCodeSnippetsByUserName(username: string): Observable<CodeSnippet[]> {
    return this.http.get<CodeSnippet[]>(`http://localhost:8080/snippets/users/${username}`);
  }

  postSnippet(snippet: CodeSnippet): Observable<CodeSnippet> {
    return this.http.post<CodeSnippet>('http://localhost:8080/snippets', snippet, httpOptions)
      .pipe(
        catchError(this.handleError),
      );


  }

  postReview(review: CodeReview): Observable<CodeReview> {
    return this.http.post<CodeReview>('http://localhost:8080/reviews', review, httpOptions)
      .pipe(
        catchError(this.handleError),
      );

  }

  updateSnippetImpressions(impressionRequest: ImpressionRequest): Observable<Score> {
    console.log(impressionRequest);
    return this.http.post<Score>('http://localhost:8080/snippets/impressions', impressionRequest, httpOptions)
      .pipe(
        catchError(this.handleError),
      );
  }

  updateSectionImpressions(impressionRequest: ImpressionRequest): Observable<Score> {
    console.log(impressionRequest);
    return this.http.post<Score>('http://localhost:8080/reviews/sections/impressions', impressionRequest, httpOptions)
      .pipe(
        catchError(this.handleError),
      );
  }

  getCodeSnippetsByTag(tagName: string): Observable<CodeSnippet[]> {
    return this.http.post<CodeSnippet[]>('http://localhost:8080/snippets/tag', tagName, httpOptions)
      .pipe(
        catchError(this.handleError),
      );
  }

  getCodeSnippetsByTags(tagNames: string[]): Observable<CodeSnippet[]> {
    return this.http.post<CodeSnippet[]>('http://localhost:8080/snippets/tags', tagNames, httpOptions)
      .pipe(
        catchError(this.handleError),
      );
  }

  getCodeSnippetTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('http://localhost:8080/tags/snippet')
      .pipe(
        catchError(this.handleError),
      );
  }

  getFeedTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('http://localhost:8080/tags/feed')
      .pipe(
        catchError(this.handleError),
      );
  }

  report(userId: string, reportType: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/report?username=${userId}&reportType=${reportType}`).pipe(
      catchError(this.handleError),
    );
  }


  getReputation(username: string): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/reputation?username=${username}`).pipe(
      catchError(this.handleError),
    );
  }
  updateUserReputation(request: ImpressionRequest): Observable<User> {
    return this.http.post<User>('http://localhost:8080/reputation', request, httpOptions)
      .pipe(
        catchError(this.handleError),
      );
  }

  getTopTags(username: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`http://localhost:8080/snippets/${username}/tags`)
      .pipe(
        catchError(this.handleError),
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
  }
}
