import { Component, AfterViewChecked } from '@angular/core';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { StateService } from '../../../@core/utils';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Router } from '@angular/router';
import { User } from '../../../@core/lib/objects/user';
import { AuthorizedComponentComponent } from '../authorized-component/authorized-component.component';
import {IDropdownSettings} from 'ng-multiselect-dropdown';

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
  dropdownList = [];
  selectedTags: any[] = [];
  dropdownSettings = {};

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
    if (cardData.loading) {
      return;
    }

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

  ngOnInit(): void {
    this.codeSnippetsService.getTagList().subscribe(tags => {
      const dropdownList: any[] = []
      for (let i = 0; i < tags.length; i++) {
        dropdownList[i] = {};
        dropdownList[i].item_id = i + 1;
        dropdownList[i].item_text = tags[i].name;
      }
      this.dropdownList = dropdownList;
    });

    // let alreadySet: boolean = false;
    // this.state.selectedTag.subscribe((tag) => {
    //   if (!alreadySet) {
    //     if (tag)
    //       this.selectedTags = [tag.name];
    //     else
    //       this.selectedTags = [];
    //     this.state.selectTag(undefined);
    //     alreadySet = true;
    //   }
    //
    // });

    this.selectedTags = []
    if (this.state.selectedTag) {
      this.selectedTags = [this.state.selectedTag];
      this.state.selectedTag = undefined;
    }


    this.dropdownSettings = <IDropdownSettings>{
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: true,
      enableCheckAll: false,
      limitSelection: 4,
    };
    console.log('created drop-down menu');
  }

  onItemSelect(item: any) {
    // console.log(this.selectedTags);
    const tagNames: string[] = this.createTaglistFromSelectedTags();
    // console.log(tagNames);
    if (tagNames.length === 0) {
      this.codeSnippetsService.getCodeSnippets()
        .subscribe(nextSnippet => {
          this.snippets.push(...nextSnippet);
        });
    } else { // reset
      this.codeSnippetsService.getCodeSnippetsByTags(tagNames)
        .subscribe(nextSnippet => {
          // console.log(nextSnippet);
          this.snippets = nextSnippet;
        });
    }
  }

  createTaglistFromSelectedTags() {
    const tagNames: string[] = [];
    for (let i = 0; i <  this.selectedTags.length; i++) {
      tagNames[i] = this.selectedTags[i].item_text;
    }
    return tagNames;
}
}


