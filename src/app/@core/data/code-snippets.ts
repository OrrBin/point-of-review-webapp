import { Observable } from 'rxjs';
import { CodeSnippet } from '../lib/objects/code-snippet';
import { CodeReview } from '../lib/objects/code-review';

export abstract class CodeSnippetsData {
  abstract getCodeSnippets(): Observable<CodeSnippet[]>;
  abstract postSnippet(snippet: CodeSnippet): Observable<CodeSnippet>;
  abstract postReview(review: CodeReview): Observable<CodeReview>;
}
