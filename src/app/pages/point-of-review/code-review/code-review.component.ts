import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../@core/utils';
import { CodeReview } from '../../../@core/lib/objects/code-review';

@Component({
  selector: 'ngx-code-review',
  templateUrl: './code-review.component.html',
  styleUrls: ['./code-review.component.scss']
})
export class CodeReviewComponent implements OnInit {

  private review: CodeReview;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.selectedCodeReview.subscribe((value) => this.review = value);
  }

}
