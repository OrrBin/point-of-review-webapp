import { Component, OnInit } from '@angular/core';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { User } from '../../../@core/lib/objects/user';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { StateService } from '../../../@core/utils';
import { Router } from '@angular/router';
import { AuthorizedComponentComponent as AuthorizedComponent } from '../authorized-component/authorized-component.component';
import {AuthService} from '../../../@core/services/auth.service';
import {Tag} from "../../../@core/lib/objects/tag";
import {NbDialogService} from "@nebular/theme";

@Component({
  selector: 'ngx-personal-feed',
  templateUrl: './personal-feed.component.html',
  styleUrls: ['./personal-feed.component.scss']
})
export class PersonalFeedComponent extends AuthorizedComponent implements OnInit {
  snippetsCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  snippets: CodeSnippet[] = [];
  user: User;

  reputation: number;
  tags: Tag[];

  constructor(auth: AuthService, private codeSnippetsService: CodeSnippetsData, state: StateService, router: Router) {
    super(auth, state, router);
    this.codeSnippetsService.getCodeSnippetsByUserName(this.currentUserName())
      .subscribe(nextSnippet => {
        this.snippets.push(...nextSnippet);
      });
  }

  ngOnInit() {
    this.getReputation();
    this.codeSnippetsService.getTopTags(this.user.username).subscribe(tags => this.tags = tags);
  }

  getReputation(): number {
    this.codeSnippetsService.getReputation(this.user.username).subscribe(num => {
        this.reputation = num;
      },
    );
    return this.reputation;
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

  getRank() {
    if (this.reputation < 40) {
      return 'Junior';
    }
    if (this.reputation < 100) {
      return 'Senior';
    }
    if (this.reputation < 200) {
      return 'Master';
    }

    return 'Elite';
  }

  getIcon() {
    if (this.reputation < 40) {
      return 'https://i.imgur.com/xNnFkfk.png'; // bug
    }
    if (this.reputation < 100) {
      return 'https://i.imgur.com/8pGQmOC.png'; // new bronze medal
    }
    if (this.reputation < 200) {
      return 'https://i.imgur.com/ErdCm7y.png'; // new silver medal
    }
    return 'https://i.imgur.com/PMSsaGG.png'; // new gold medal, bigger
    // return 'https://i.imgur.com/6sj7eva.png'; // new gold medal
  }

  getNextRank() {
    if (this.reputation < 40) {
      return 'Next rank: Senior (40)';
    }
    if (this.reputation < 100) {
      return 'Next rank: Master (100)';
    }
    if (this.reputation < 200) {
      return 'Next rank: Elite (200)';
    }

    return '';
  }
}
