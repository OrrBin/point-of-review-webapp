import { Tag } from './tag';
import { Score } from './score';

export class Comment {
  id: string;
  userId: string;
  codeReviewId: string;
  content: string;
  tags: Tag[];
  score: Score;
}