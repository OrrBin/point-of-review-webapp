import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
import { CodeSnippetsData } from '../data/code-snippets';
import { CodeSnippet } from '../lib/objects/code-snippet';
import { Code } from '../lib/objects/code';
import { Score } from '../lib/objects/score';
import {Impression} from "../lib/objects/impression";
import {ImpressionRequest} from "../lib/objects/impression-request";

@Injectable()
export class CodeSnippetsService extends CodeSnippetsData {

  private snippets = [
    new CodeSnippet('testId1', 'Orr', 'Help me get this code better', new Code("test code 1;", 'javascript'), [], new Score(85, null, null)),
    new CodeSnippet('testId2', 'Oz', 'is this code good ?', new Code("test code 2;", 'javascript'), [], new Score(90, null, null)),
    new CodeSnippet('testId3', 'Allen', 'Like this code ??', new Code("test code code coed 3;", 'javascript'), [], new Score(85, null, null)),
    new CodeSnippet('testId4', 'Yahav', 'HELP !', new Code("test code asd \nasidjasd jasd2a;", 'javascript'), [], new Score(30, null, null)),
  ]

  getCodeSnippets(): Observable<CodeSnippet[]> {
    return observableOf(this.snippets);
  }

  postSnippet(snippet: CodeSnippet): Observable<CodeSnippet> {
    this.snippets.push(snippet);
    return observableOf(snippet);
  }

  updateSnippetImpressions(impressionRequest: ImpressionRequest): Observable<Score> {
    return undefined; // TODO
  }
}
