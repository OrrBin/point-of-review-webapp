import { CodeChunk } from './code-chunk';
import { Tag } from './tag';
import { Score } from './score';

export class CodeReviewSection {
  private id: string;
  private userId: string;
  private codeSnippetId: string;
  private codeReviewId: string;
  private sourceCode: CodeChunk;
  private content: string;
  private tags: Tag[];
  private comments: Comment[];
  private score: Score;
}