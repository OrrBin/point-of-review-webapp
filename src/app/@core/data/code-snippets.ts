import { Observable } from 'rxjs';
import { CodeSnippet } from '../lib/objects/code-snippet';

import { CodeReview } from '../lib/objects/code-review';
import { Impression } from '../lib/objects/impression';
import { ImpressionRequest } from '../lib/objects/impression-request';
import { Score } from '../lib/objects/score';

export abstract class CodeSnippetsData {
  abstract getCodeSnippets(): Observable<CodeSnippet[]>;
  abstract getCodeSnippetsByUserName(username: string): Observable<CodeSnippet[]>;
  abstract postSnippet(snippet: CodeSnippet): Observable<CodeSnippet>;
  abstract postReview(review: CodeReview): Observable<CodeReview>;
  abstract updateSnippetImpressions(impressionRequest: ImpressionRequest): Observable<Score>;
  abstract updateSectionImpressions(impressionRequest: ImpressionRequest): Observable<Score>;
}


