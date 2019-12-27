import { Observable } from 'rxjs';
import { CodeSnippet } from '../lib/objects/code-snippet';

export abstract class CodeSnippetsData {
  abstract getCodeSnippets(): Observable<CodeSnippet[]>;
  abstract postSnippet(snippet: CodeSnippet): Observable<CodeSnippet>;
}
