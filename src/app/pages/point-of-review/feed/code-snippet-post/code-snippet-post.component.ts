import { Component, Input } from '@angular/core';

import { CodeSnippet } from '../../../../@core/lib/objects/code-snippet';
import { CodeSnippetsData } from "../../../../@core/data/code-snippets";
import { StateService } from "../../../../@core/utils";
import { Router } from "@angular/router";

@Component({
  selector: 'ngx-code-snippet-post',
  templateUrl: 'code-snippet-post.component.html',
  styleUrls: ['code-snippet-post.component.scss'],
})
export class CodeSnippetPostComponent {

  @Input() snippet: CodeSnippet;

  constructor(private state: StateService, private router: Router) {
  }

  choosePost() {
    this.state.selectCodeSnippet(this.snippet);
    this.router.navigate(['/pages/point-of-review/code-snippet']);
  }
}
