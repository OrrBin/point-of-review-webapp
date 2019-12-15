import { Component } from '@angular/core';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { StateService } from "../../../@core/utils";
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';

@Component({
  selector: 'ngx-infinite-list',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.scss'],
})
export class FeedComponent {
  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  constructor(private codeSnippetsService: CodeSnippetsData, private state: StateService) {
    this.codeSnippetsService.getCodeSnippets().subscribe(nextSnippet => {
      console.log(nextSnippet)
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

  choosePost(snippet: CodeSnippet) {
    console.log('snippet chosen ' + snippet.$id);
  }
}
