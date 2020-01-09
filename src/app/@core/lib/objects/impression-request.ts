import {Impression} from './impression';
import {CodeSnippet} from './code-snippet';

export class ImpressionRequest {
  snippetId: String;
  voterId: String;
  impression: Impression;
  codeReviewId: String;
  codeReviewSectionId: String;


  constructor($snippetId: String, $voterId: String, $impression: Impression, $codeReviewId: String, $codeReviewSectionId: String) {
    this.snippetId = $snippetId;
    this.voterId = $voterId;
    this.impression = $impression;
    this.codeReviewId = $codeReviewId;
    this.codeReviewSectionId = $codeReviewSectionId;
  }
}
