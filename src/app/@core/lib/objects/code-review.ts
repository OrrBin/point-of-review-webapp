import { CodeReviewSection } from './code-review-section';
import { Tag } from './tag';
import { Score } from './score';

export class CodeReview {
  id: string;
  userId: string;
  codeSnippetId: string;
  score: Score;
  description: string;
  sections: CodeReviewSection[];
  tags: Tag[];
  comments: Comment[];


  constructor($id: string, $userId: string, $codeSnippetId: string, $score: Score, $description: string, $sections: CodeReviewSection[], $tags: Tag[], $comments: Comment[]) {
    this.id = $id;
    this.userId = $userId;
    this.codeSnippetId = $codeSnippetId;
    this.score = $score;
    this.description = $description;
    this.sections = $sections;
    this.tags = $tags;
    this.comments = $comments;
  }
}