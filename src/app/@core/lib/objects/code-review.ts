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


  constructor($id: string, $codeSnippetId: string, $userId: string, $score: Score, $description: string, $sections: CodeReviewSection[], $tags: Tag[], $comments: Comment[]) {
    this.id = $id;
    this.userId = $userId;
    this.codeSnippetId = $codeSnippetId;
    this.score = $score;
    this.description = $description;
    this.sections = $sections;
    this.tags = $tags;
    this.comments = $comments;
  }

  validate(): boolean {

    for (let index = 0; index < this.sections.length; index++) {
      const section = this.sections[index];
      if (!section.validate())
        return false;
    }
    return true;
  }
}