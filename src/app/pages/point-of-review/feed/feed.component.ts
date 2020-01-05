import { Component, AfterViewChecked } from '@angular/core';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { StateService } from "../../../@core/utils";
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Router } from '@angular/router';
import { User } from '../../../@core/lib/objects/user';
import { AuthorizedComponentComponent } from '../authorized-component/authorized-component.component';

@Component({
  selector: 'ngx-infinite-list',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss'],
})
export class FeedComponent extends AuthorizedComponentComponent {
  snippetsCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  snippets: CodeSnippet[] = [];
  user: User;
  constructor(private codeSnippetsService: CodeSnippetsData, state: StateService, router: Router) {
    super(state, router);
    this.codeSnippetsService.getCodeSnippets()
      .subscribe(nextSnippet => {
        this.snippets.push(...nextSnippet);
      });
  }

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.codeSnippetsService.getCodeSnippets()
      .subscribe(nextSnippet => {
        cardData.placeholders = [];
        cardData.news.push(...nextSnippet);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

}
