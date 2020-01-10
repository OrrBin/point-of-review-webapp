import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { CodeSnippetsData } from '../data/code-snippets';
import { CodeSnippet } from '../lib/objects/code-snippet';
import { CodeReview } from '../lib/objects/code-review';
import { Code } from '../lib/objects/code';
import { Score } from '../lib/objects/score';
import { ImpressionRequest } from '../lib/objects/impression-request';
import { Tag } from '../lib/objects/tag';
import { User } from '../lib/objects/user';

@Injectable()
export class CodeSnippetsService extends CodeSnippetsData {
  getCodeSnippetsByUserName(username: string): Observable<CodeSnippet[]> {
    throw new Error('Method not implemented.');
  }

  private snippets = [
    new CodeSnippet('testId1', 0, 'Orr', 'Help me get this code better', new Code('test code 1;', 'javascript'), [], new Score(85, null, null)),
    new CodeSnippet('testId2', 0, 'Oz', 'is this code good ?', new Code('test code 2;', 'javascript'), [], new Score(90, null, null)),
    new CodeSnippet('testId3', 0, 'Allen', 'Like this code ??', new Code('test code code coed 3;', 'javascript'), [], new Score(85, null, null)),
    new CodeSnippet('testId4', 0, 'Yahav', 'HELP !', new Code('test code asd \nasidjasd jasd2a;', 'javascript'), [], new Score(30, null, null)),
  ];

  getCodeSnippets(): Observable<CodeSnippet[]> {
    return observableOf(this.snippets);
  }

  postSnippet(snippet: CodeSnippet): Observable<CodeSnippet> {
    this.snippets.push(snippet);
    return observableOf(snippet);
  }

  postReview(review: CodeReview) {
    for (let index = 0; index < this.snippets.length; index++) {
      const snippet = this.snippets[index];
      if (snippet.id == review.codeSnippetId)
        snippet.reviews.push(review);
    }

    return observableOf(review);
  }

  report(userId: string, reportType: string): Observable<User> {
    throw new Error("Method not implemented.");
  }

  updateSnippetImpressions(impressionRequest: ImpressionRequest): Observable<Score> {
    return undefined; // TODO
  }
  getCodeSnippetsByTags(tagNames: string[]): Observable<CodeSnippet[]> {
    return undefined;
  }
  getTagList(): Observable<Tag[]> {
    return undefined;
  }
  getCodeSnippetsByTag(tagName: string): Observable<CodeSnippet[]> {
    return undefined;
  }
  updateSectionImpressions(impressionRequest: ImpressionRequest): Observable<Score> {
    return undefined;
  }
}
