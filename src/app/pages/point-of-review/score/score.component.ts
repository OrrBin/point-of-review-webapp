import {Component, Input, OnInit} from '@angular/core';
import {Score} from '../../../@core/lib/objects/score';
import {NbIconLibraries} from '@nebular/theme';
import {CodeSnippetsData} from '../../../@core/data/code-snippets';
import {CodeSnippet} from '../../../@core/lib/objects/code-snippet';
import {Impression} from '../../../@core/lib/objects/impression';
import {ImpressionRequest} from '../../../@core/lib/objects/impression-request';

@Component({
  selector: 'ngx-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() score: Score;
  @Input() snippet: CodeSnippet;
  toggle1 = false;
  toggle2 = false;
  constructor(private codeSnippetsService: CodeSnippetsData, iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }
  vote(voterId: String, impression: Impression): void {
    console.log('voting');
    if (impression == 0) {
      this.toggle1 = !this.toggle1;
      if (this.toggle2 == true){
        this.toggle2 = false;
      }
    }
    if (impression == 1) {
      this.toggle2 = !this.toggle2;
      if (this.toggle1 == true){
        this.toggle1 = false;
      }
    }
    this.codeSnippetsService.updateSnippetImpressions(
      new ImpressionRequest(this.snippet, voterId, impression)).subscribe(
        (score) => {this.score = score; });
  }
  getImpression(impression: Impression): number {
    if (this.score.impressions[impression] == null) {
      return 0;
      } else {
      return this.score.impressions[impression];
      }
  }
  getScore(): number {
    if (this.score == null || this.score.voterToImpression == null || this.score.voterToImpression.size == 0) {
      return 0;
    }
    let likesPowered;
    let dislikes;
    if (this.score.impressions['LIKE'] == null) {
      likesPowered = 0;
    } else {
      likesPowered = Math.pow(this.score.impressions['LIKE'], 2);
    }
    if (this.score.impressions['DISLIKE'] == null) {
      dislikes = 0;
    } else {
      dislikes = this.score.impressions['DISLIKE'];
    }
    return 100 * (likesPowered / (likesPowered + dislikes));
  }
  ngOnInit() {
  }

}
