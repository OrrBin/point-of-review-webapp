import {Impression} from './impression';
import {CodeSnippet} from './code-snippet';

export class ImpressionRequest {
  snippet: CodeSnippet;
  voterId: String;
  impression: Impression;


  constructor($snippet: CodeSnippet, $voterId: String, $impression: Impression) {
    this.snippet = $snippet;
    this.voterId = $voterId;
    this.impression = $impression;

  }

}
