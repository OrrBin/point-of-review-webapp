import { Component, Input } from '@angular/core';

import { CodeSnippet } from '../../../../@core/lib/objects/code-snippet';
import { CodeSnippetsData } from '../../../../@core/data/code-snippets';
import { StateService } from '../../../../@core/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-code-snippet-post',
  templateUrl: 'code-snippet-post.component.html',
  styleUrls: ['code-snippet-post.component.scss'],
})
export class CodeSnippetPostComponent {

  @Input() snippet: CodeSnippet;

  constructor(private state: StateService, private router: Router) {
  }

  getDate(): any {
    const date = new Date(this.snippet.timestamp);
    const dateString: string = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    const hours: string = date.getHours() >= 10 ? '' + date.getHours() :  '0' + date.getHours();
    const minutes: string = date.getMinutes() >= 10 ? '' + date.getMinutes() :  '0' + date.getMinutes();
    return dateString + ' ' + hours + ':' + minutes;
  }

  choosePost() {
    this.state.selectCodeSnippet(this.snippet);
    this.router.navigate(['/pages/point-of-review/code-snippet']);
  }
}
