import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
import { CodeSnippetsData } from '../data/code-snippets';
import { CodeSnippet } from '../lib/objects/code-snippet';
import { Code } from '../lib/objects/code';
import { Score } from '../lib/objects/score';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CodeSnippetsService extends CodeSnippetsData {

  constructor(private http: HttpClient) {
    super();
  }

  getCodeSnippets(): Observable<CodeSnippet[]> {
    return this.http.get<CodeSnippet[]>('http://localhost:8080/snippets/popular');
  }
}
