import { Code } from './code';
import { CodeReview } from './code-review';
import { Score } from './score';
import { Tag } from './tag';

export class CodeSnippet {
  id: string;
  timestamp: number
  userId: string;
  title: string;
  description: string;
  code: Code;
  reviews: CodeReview[];
  score: Score;
  tags: Tag[];

  constructor($id: string, $timestamp: number, $userId: string, $description: string, $code: Code, $reviews: CodeReview[], $score: Score) {
    this.id = $id;
    this.timestamp = $timestamp;
    this.userId = $userId;
    this.description = $description
    this.code = $code;
    this.reviews = $reviews;
    this.score = $score;
  }

  validate(): boolean {
    if (!this.title || !this.description) {
      return false;
    }

    if (!this.code.validate())
      return false;

    return true;
  }
}
