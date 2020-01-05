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

@Component({
  selector: 'ngx-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent extends AuthorizedComponentComponent {
  @Input() score: Score;
  @Input() snippet: CodeSnippet;
  toggle1 = false;
  toggle2 = false;

  constructor(private codeSnippetsService: CodeSnippetsData, state: StateService, router: Router, iconsLibrary: NbIconLibraries) {
    super(state, router);
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
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
    this.codeSnippetsService.updateSnippetImpressions(
      new ImpressionRequest(this.snippet, this.currentUserName(), impression)).subscribe(
        (score) => { this.score = score; });
  }
  getImpression(impression: Impression): number {
    if (this.score.impressions[impression] == null) {
      return 0;
    } else {
      return this.score.impressions[impression];
    }
  }
  getScore(): number {
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
    if (this.snippet.title == "dfdfgsdg") {
      console.log('likesPowered');
      console.log(likesPowered);
      console.log('dislikes');
      console.log(dislikes);
    }

    return Math.ceil((dislikes == 0 && likesPowered == 0) ? 0 : 100 * (likesPowered / (likesPowered + dislikes)));
  }
  ngOnInit() {
  }

}
