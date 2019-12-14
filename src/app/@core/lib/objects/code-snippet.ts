import { Code } from './code';
import { CodeReview } from './code-review';

export class CodeSnippet {
  private id: string;
  private userId: string;
  private description: string;
  private code: Code;
  private reviews: CodeReview[];


  constructor($id: string, $userId: string, $description: string, $code: Code, $reviews: CodeReview[]) {
    this.id = $id;
    this.userId = $userId;
    this.description = $description;
    this.code = $code;
    this.reviews = $reviews;
  }


  /**
   * Getter $id
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $userId
   * @return {string}
   */
  public get $userId(): string {
    return this.userId;
  }

  /**
   * Getter $description
   * @return {string}
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $code
   * @return {Code}
   */
  public get $code(): Code {
    return this.code;
  }

  /**
   * Getter $reviews
   * @return {CodeReview[]}
   */
  public get $reviews(): CodeReview[] {
    return this.reviews;
  }

  /**
   * Setter $id
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }

  /**
   * Setter $userId
   * @param {string} value
   */
  public set $userId(value: string) {
    this.userId = value;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $code
   * @param {Code} value
   */
  public set $code(value: Code) {
    this.code = value;
  }

  /**
   * Setter $reviews
   * @param {CodeReview[]} value
   */
  public set $reviews(value: CodeReview[]) {
    this.reviews = value;
  }


}