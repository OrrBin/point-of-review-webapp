import { CodeReviewSection } from './code-review-section';
import { Tag } from './tag';
import { Score } from './score';

export class CodeReview {
  private id: string;
  private userId: string;
  private codeSnippetId: string;
  private score: Score;
  private description: string;
  private sections: CodeReviewSection[];
  private tags: Tag[];
  private comments: Comment[];


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

  public get $id(): string {
    return this.id;
  }

  public get $userId(): string {
    return this.userId;
  }

  public get $codeSnippetId(): string {
    return this.codeSnippetId;
  }

  public get $score(): Score {
    return this.score;
  }

  public get $description(): string {
    return this.description;
  }

  public get $sections(): CodeReviewSection[] {
    return this.sections;
  }

  public get $tags(): Tag[] {
    return this.tags;
  }

  public get $comments(): Comment[] {
    return this.comments;
  }

  public set $id(value: string) {
    this.id = value;
  }

  public set $userId(value: string) {
    this.userId = value;
  }

  public set $codeSnippetId(value: string) {
    this.codeSnippetId = value;
  }

  public set $score(value: Score) {
    this.score = value;
  }

  public set $description(value: string) {
    this.description = value;
  }

  public set $sections(value: CodeReviewSection[]) {
    this.sections = value;
  }

  public set $tags(value: Tag[]) {
    this.tags = value;
  }

  public set $comments(value: Comment[]) {
    this.comments = value;
  }
}