import { CodeChunk } from './code-chunk';
import { Tag } from './tag';
import { Score } from './score';
import { Code } from './code';

export class CodeReviewSection {
  id: string;
  userId: string;
  codeSnippetId: string;
  codeReviewId: string;
  code: Code;
  content: string;
  tags: Tag[];
  score: Score;

  constructor($id: string, $userId: string, $codeSnippetId: string, $codeReviewId: string, $score: Score, $code: Code, $content: string, $tags: Tag[]) {
    this.id = $id;
    this.codeReviewId = $codeReviewId;
    this.userId = $userId;
    this.codeSnippetId = $codeSnippetId;
    this.code = $code;
    this.score = $score;
    this.content = $content;
    this.tags = $tags;
  }


  validate(): boolean {
    if (!this.code.validate())
      return false;

    return true;
  }

}