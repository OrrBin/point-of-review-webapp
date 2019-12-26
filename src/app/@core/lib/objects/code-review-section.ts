import { CodeChunk } from './code-chunk';
import { Tag } from './tag';
import { Score } from './score';

export class CodeReviewSection {
  id: string;
  userId: string;
  codeSnippetId: string;
  codeReviewId: string;
  sourceCode: CodeChunk;
  content: string;
  tags: Tag[];
  comments: Comment[];
  score: Score;
}