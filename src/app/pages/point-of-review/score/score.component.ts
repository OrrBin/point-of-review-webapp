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
  constructor(private codeSnippetsService: CodeSnippetsData, iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }
  vote(voterId: String, impression: Impression): void {
    console.log('voting');
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
  ngOnInit() {
  }

}
