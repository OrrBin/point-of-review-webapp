import { Tag } from './tag';
import { Score } from './score';

export class Comment {
  private id: string;
  private userId: string;
  private codeReviewId: string;
  private content: string;
  private tags: Tag[];
  private score: Score;
}