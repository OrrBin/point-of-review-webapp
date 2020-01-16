import { Component, OnInit, Input } from '@angular/core';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { CodeReview } from '../../../@core/lib/objects/code-review';
import { StateService } from '../../../@core/utils';
import { AuthorizedComponentComponent } from '../authorized-component/authorized-component.component';
import { Router } from '@angular/router';
import {AuthService} from '../../../@core/services/auth.service';

@Component({
  selector: 'ngx-code-reviews-view',
  templateUrl: './code-reviews-view.component.html',
  styleUrls: ['./code-reviews-view.component.scss']
})
export class CodeReviewsViewComponent extends AuthorizedComponentComponent {

  snippet: CodeSnippet;
  review: CodeReview;

  constructor(auth: AuthService, state: StateService, router: Router) {
    super(auth, state, router);
    state.selectedCodeReview.subscribe((review) => {
      this.review = review;
    });
    state.selectedCodeSnippet.subscribe((snippet) => {
      this.snippet = snippet;
    });
  }

  ngOnInit() {
  }

}
