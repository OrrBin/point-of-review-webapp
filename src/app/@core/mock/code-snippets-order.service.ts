import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
import { CodeSnippetsData } from '../data/code-snippets';
import { CodeSnippet } from '../lib/objects/code-snippet';
import { Code } from '../lib/objects/code';

@Injectable()
export class CodeSnippetsService extends CodeSnippetsData {

  private snippets = [
    new CodeSnippet('testId1', 'Orr', 'Help me get this code better', new Code("test code 1;"), []),
    new CodeSnippet('testId1', 'Oz', 'is this code good ?', new Code("test code 2;"), []),
    new CodeSnippet('testId1', 'Allen', 'Like this code ??', new Code("test code code coed 3;"), []),
    new CodeSnippet('testId1', 'Yahav', 'HELP !', new Code("test code asd \nasidjasd jasd2a;"), []),
  ]

  getCodeSnippets(): Observable<CodeSnippet[]> {
    return observableOf(this.snippets);
  }
}
