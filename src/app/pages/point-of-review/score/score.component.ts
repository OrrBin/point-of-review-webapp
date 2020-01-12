import { Component, Input, OnInit } from '@angular/core';
import { Score } from '../../../@core/lib/objects/score';
import { NbIconLibraries } from '@nebular/theme';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Impression } from '../../../@core/lib/objects/impression';
import { ImpressionRequest } from '../../../@core/lib/objects/impression-request';
import { StateService } from '../../../@core/utils';
import { AuthorizedComponentComponent } from '../authorized-component/authorized-component.component';
import { Router } from '@angular/router';
import {CodeReviewSection} from '../../../@core/lib/objects/code-review-section';

@Component({
  selector: 'ngx-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent extends AuthorizedComponentComponent {
  @Input() score: Score;
  @Input() snippet: CodeSnippet;
  @Input() section: CodeReviewSection;
  toggle1 = false;
  toggle2 = false;
  limit = 5;
  constructor(private codeSnippetsService: CodeSnippetsData, state: StateService, router: Router, iconsLibrary: NbIconLibraries) {
    super(state, router);
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }
  ngOnInit() {
    let vote = this.score.voterToImpression[this.currentUserName()];
    this.toggle1 = vote == 'LIKE';
    this.toggle2 = vote == 'DISLIKE';
  }

  vote(impression: Impression): void {
    console.log('voting');
    if (impression == 0) {
      this.toggle1 = !this.toggle1;
      if (this.toggle2 == true) {
        this.toggle2 = false;
      }
    }
    if (impression == 1) {
      this.toggle2 = !this.toggle2;
      if (this.toggle1 == true) {
        this.toggle1 = false;
      }
    }

    if (this.section == null) {
      const request = new ImpressionRequest(this.snippet.id, this.currentUserName(),
        impression, null, null, this.snippet.username);
      this.codeSnippetsService.updateSnippetImpressions(request).subscribe(
        (score) => {
          this.score = score;
          this.snippet.score = score;
        });
      this.codeSnippetsService.updateUserReputation(request).subscribe(null);
      console.log('reputation is updated');
    } else {
      const request = new ImpressionRequest(this.snippet.id, this.currentUserName(),
        impression, this.section.codeReviewId, this.section.id, this.section.userId)
      this.codeSnippetsService.updateSectionImpressions(request).subscribe(
        (score) => {
          this.score = score;
          this.section.score = score;
        });
      this.codeSnippetsService.updateUserReputation(request).subscribe(null);
      console.log('reputation is updated');
    }
  }
  getImpression(impression: Impression): number {
    if (this.score.impressions[impression] == null) {
      return 0;
    } else {
      return this.score.impressions[impression];
    }
  }
  getScore(): number {
    let likes;
    let dislikes;
    if (this.score.impressions['LIKE'] == null) {
      likes = 0;
    } else {
      likes = this.score.impressions['LIKE'];
    }
    if (this.score.impressions['DISLIKE'] == null) {
      dislikes = 0;
    } else {
      dislikes = this.score.impressions['DISLIKE'];
    }
    return <number>(10 * (2 * likes - dislikes));
  }

}
