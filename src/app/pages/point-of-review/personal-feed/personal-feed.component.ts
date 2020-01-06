import { Component, OnInit } from '@angular/core';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { User } from '../../../@core/lib/objects/user';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { StateService } from '../../../@core/utils';
import { Router } from '@angular/router';
import { AuthorizedComponentComponent as AuthorizedComponent } from '../authorized-component/authorized-component.component';

@Component({
  selector: 'ngx-personal-feed',
  templateUrl: './personal-feed.component.html',
  styleUrls: ['./personal-feed.component.scss']
})
export class PersonalFeedComponent extends AuthorizedComponent {
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
    this.codeSnippetsService.getCodeSnippetsByUserName(this.currentUserName())
      .subscribe(nextSnippet => {
        this.snippets.push(...nextSnippet);
      });
  }

  loadNext(cardData) {
    if (cardData.loading) { return; }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.codeSnippetsService.getCodeSnippetsByUserName(this.currentUserName())
      .subscribe(nextSnippet => {
        cardData.placeholders = [];
        cardData.news.push(...nextSnippet);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

}
