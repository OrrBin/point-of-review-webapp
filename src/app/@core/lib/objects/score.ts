import {Impression} from "./impression";
import {CodeSnippet} from "./code-snippet";
import {Observable} from "rxjs";

export class Score {
  score: number;
  impressions: Map<Impression, number> ;
  voterToImpression: Map<String, Impression> ;


  constructor($score: number, $impressions: Map<Impression, number> , $voterToImpression: Map<String, Impression> ) {
    this.score = $score;
    this.impressions = $impressions;
    this.voterToImpression = $voterToImpression;
  }

}
