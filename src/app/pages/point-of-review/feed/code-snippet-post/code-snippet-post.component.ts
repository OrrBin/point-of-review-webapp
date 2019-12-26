import { Component, Input } from '@angular/core';

import { CodeSnippet } from '../../../../@core/lib/objects/code-snippet';

@Component({
  selector: 'ngx-code-snippet-post',
  templateUrl: 'code-snippet-post.component.html',
  styleUrls: ['code-snippet-post.component.scss'],
})
export class CodeSnippetPostComponent {

  @Input() snippet: CodeSnippet;
}
