import { Component, Input } from '@angular/core';

import { CodeSnippet } from '../../../../@core/lib/objects/code-snippet';

@Component({
  selector: 'ngx-code-snippet-post',
  templateUrl: 'code-snippet-post.component.html',
})
export class CodeSnippetPostComponent {

  @Input() post: CodeSnippet;
}
