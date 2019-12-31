import { Observable } from 'rxjs';
import { CodeSnippet } from '../lib/objects/code-snippet';
import {Impression} from '../lib/objects/impression';
import {ImpressionRequest} from '../lib/objects/impression-request';
import {Score} from '../lib/objects/score';

export abstract class CodeSnippetsData {
  abstract getCodeSnippets(): Observable<CodeSnippet[]>;
  abstract postSnippet(snippet: CodeSnippet): Observable<CodeSnippet>;
  abstract updateSnippetImpressions(impressionRequest: ImpressionRequest): Observable<Score>;
}


