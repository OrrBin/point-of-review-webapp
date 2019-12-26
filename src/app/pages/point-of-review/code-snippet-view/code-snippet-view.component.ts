import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../@core/utils';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Score } from '../../../@core/lib/objects/score';

@Component({
  selector: 'ngx-code-snippet-view',
  templateUrl: './code-snippet-view.component.html',
  styleUrls: ['./code-snippet-view.component.scss']
})
export class CodeSnippetViewComponent implements OnInit {

  private snippet: CodeSnippet;
  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.selectedCodeSnippet.subscribe((value) => {
      this.snippet = value;
    });
  }

}
