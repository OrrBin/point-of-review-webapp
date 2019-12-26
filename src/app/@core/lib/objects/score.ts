export class Score {
  score: number;
  approves: number;
  disapproves: number;
  reports: number;


  constructor($score: number, $approves: number, $disapproves: number, $reports: number) {
    this.score = $score;
    this.approves = $approves;
    this.disapproves = $disapproves;
    this.reports = $reports;
  }
}