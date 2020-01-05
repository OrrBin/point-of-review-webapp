import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../@core/utils';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Score } from '../../../@core/lib/objects/score';
import { Router } from '@angular/router';
import { CodeReview } from '../../../@core/lib/objects/code-review';

@Component({
  selector: 'ngx-code-snippet-view',
  templateUrl: './code-snippet-view.component.html',
  styleUrls: ['./code-snippet-view.component.scss']
})
export class CodeSnippetViewComponent implements OnInit {

  private snippet: CodeSnippet;
  constructor(private state: StateService, private router: Router) { }

  ngOnInit() {
    this.state.selectedCodeSnippet.subscribe((value) => {
      this.snippet = value;
      console.log(this.snippet);
    });
  }

  addCodeReview() {
    this.state.selectCodeReview(new CodeReview('' + this.snippet.reviews.length, this.snippet.id, this.snippet.id, new Score(0, new Map(), new Map()), '', [], [], []));
    this.router.navigate(['/pages/point-of-review/create-code-review']);
  }

}
