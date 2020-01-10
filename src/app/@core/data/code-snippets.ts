import { Observable } from 'rxjs';
import { CodeSnippet } from '../lib/objects/code-snippet';

import { CodeReview } from '../lib/objects/code-review';
import { Impression } from '../lib/objects/impression';
import { ImpressionRequest } from '../lib/objects/impression-request';
import { Score } from '../lib/objects/score';
import { Tag } from '../lib/objects/tag';
import { User } from '../lib/objects/user';

export abstract class CodeSnippetsData {
  abstract getCodeSnippets(): Observable<CodeSnippet[]>;
  abstract getCodeSnippetsByUserName(username: string): Observable<CodeSnippet[]>;
  abstract postSnippet(snippet: CodeSnippet): Observable<CodeSnippet>;
  abstract postReview(review: CodeReview): Observable<CodeReview>;
  abstract updateSnippetImpressions(impressionRequest: ImpressionRequest): Observable<Score>;
  abstract updateSectionImpressions(impressionRequest: ImpressionRequest): Observable<Score>;
  abstract getCodeSnippetsByTag(tagName: string): Observable<CodeSnippet[]>;
  abstract getCodeSnippetsByTags(tagNames: string[]): Observable<CodeSnippet[]>;

  abstract getCodeSnippetTags(): Observable<Tag[]>;
  abstract getFeedTags(): Observable<Tag[]>;

  abstract report(userId: string, reportType: string): Observable<User>;
}
