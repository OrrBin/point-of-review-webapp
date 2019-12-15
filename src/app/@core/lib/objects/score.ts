export class Score {
  private score: number;
  private approves: number;
  private disapproves: number;
  private reports: number;


  constructor($score: number, $approves: number, $disapproves: number, $reports: number) {
    this.score = $score;
    this.approves = $approves;
    this.disapproves = $disapproves;
    this.reports = $reports;
  }


  /**
   * Getter $score
   * @return {number}
   */
  public get $score(): number {
    return this.score;
  }

  /**
   * Getter $approves
   * @return {number}
   */
  public get $approves(): number {
    return this.approves;
  }

  /**
   * Getter $disapproves
   * @return {number}
   */
  public get $disapproves(): number {
    return this.disapproves;
  }

  /**
   * Getter $reports
   * @return {number}
   */
  public get $reports(): number {
    return this.reports;
  }

  /**
   * Setter $score
   * @param {number} value
   */
  public set $score(value: number) {
    this.score = value;
  }

  /**
   * Setter $approves
   * @param {number} value
   */
  public set $approves(value: number) {
    this.approves = value;
  }

  /**
   * Setter $disapproves
   * @param {number} value
   */
  public set $disapproves(value: number) {
    this.disapproves = value;
  }

  /**
   * Setter $reports
   * @param {number} value
   */
  public set $reports(value: number) {
    this.reports = value;
  }

}