import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../@core/utils';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Score } from '../../../@core/lib/objects/score';
import { Router } from '@angular/router';
import { CodeReview } from '../../../@core/lib/objects/code-review';
import { AuthorizedComponentComponent } from '../authorized-component/authorized-component.component';

@Component({
  selector: 'ngx-code-snippet-view',
  templateUrl: './code-snippet-view.component.html',
  styleUrls: ['./code-snippet-view.component.scss']
})
export class CodeSnippetViewComponent extends AuthorizedComponentComponent {

  private snippet: CodeSnippet;
  constructor(state: StateService, router: Router) {
    super(state, router);
  }

  ngOnInit() {
    this.state.selectedCodeSnippet.subscribe((value) => {
      this.snippet = value;
    });
  }

  addCodeReview() {
    this.state.selectCodeReview(new CodeReview('' + this.snippet.reviews.length, this.snippet.id, this.currentUserName(), new Score(0, new Map(), new Map()), '', [], [], []));
    this.router.navigate(['/pages/point-of-review/create-code-review']);
  }

  chooseReview(review: CodeReview) {
    this.state.selectCodeReview(review);
    this.state.selectCodeSnippet(this.snippet);
    this.router.navigate(['/pages/point-of-review/code-review-view']);
  }

}
