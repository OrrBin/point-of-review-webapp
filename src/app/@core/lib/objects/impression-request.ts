import {Impression} from './impression';
import {CodeSnippet} from './code-snippet';

export class ImpressionRequest {
  snippet: CodeSnippet;
  voterId: String;
  impression: Impression;
  codeReviewId: String;
  codeReviewSectionId: String;


  constructor($snippet: CodeSnippet, $voterId: String, $impression: Impression, $codeReviewId: String, $codeReviewSectionId: String) {
    this.snippet = $snippet;
    this.voterId = $voterId;
    this.impression = $impression;
    this.codeReviewId = $codeReviewId;
    this.codeReviewSectionId = $codeReviewSectionId;
  }
}
