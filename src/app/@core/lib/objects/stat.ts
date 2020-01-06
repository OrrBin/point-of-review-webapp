export class Stat {
  tagName: String;
  amount: number;
  distribution: number;


  constructor($tagName: String, $amount: number , $distribution: number ) {
    this.tagName = $tagName;
    this.amount = $amount;
    this.distribution = $distribution;
  }
}
