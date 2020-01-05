import { Component, OnInit } from '@angular/core';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Code } from '../../../@core/lib/objects/code';
import { Score } from '../../../@core/lib/objects/score';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Tag } from '../../../@core/lib/objects/tag';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { CodeReview } from '../../../@core/lib/objects/code-review';
import { CodeReviewSection } from '../../../@core/lib/objects/code-review-section';
import { StateService } from '../../../@core/utils';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-create-code-review',
  templateUrl: './create-code-review.component.html',
  styleUrls: ['./create-code-review.component.scss']
})
export class CreateCodeReviewComponent implements OnInit {
  snippet: CodeSnippet;
  review: CodeReview;
  section: CodeReviewSection;
  dropdownList = [];
  selectedTags: any[] = [];
  dropdownSettings = {};
  constructor(private codeSnippetsService: CodeSnippetsData, private state: StateService, private toastrService: NbToastrService,
    private router: Router) {
    this.section = this.newSection();
    this.state.selectedCodeSnippet.subscribe((snippet) => {
      this.snippet = snippet;
      if (this.snippet) {
        this.section.codeSnippetId = snippet.id;
        this.section.code = new Code(this.snippet.code.text, this.snippet.code.language);
      }
    });
    this.state.selectedCodeReview.subscribe((review) => {
      this.review = review;
      if (this.review) {
        this.section.codeReviewId = review.id;
        this.section.id = '' + review.sections.length;
      }
    });
  }

  newSection(): CodeReviewSection {
    let id: string = this.review == null ? '' + 0 : '' + this.review.sections.length;
    let code: Code = this.snippet == null ? new Code('', '') : new Code(this.snippet.code.text, this.snippet.code.language);
    return new CodeReviewSection(id, '', this.snippet == null ? '' : this.snippet.id, this.review == null ? '' : this.review.id, new Score(0, 0, 0, 0), code, '', []);
  }

  ngOnInit() {

    this.dropdownList = [
      { item_id: 1, item_text: 'javascript' },
      { item_id: 2, item_text: 'java' },
      { item_id: 3, item_text: 'typescript' },
      { item_id: 4, item_text: 'algorithm' },
      { item_id: 5, item_text: 'sorting' },
      { item_id: 6, item_text: 'graph' },
      { item_id: 7, item_text: 'tree' },
      { item_id: 8, item_text: 'heap' },
      { item_id: 9, item_text: 'array' },
      { item_id: 10, item_text: 'oop' },
      { item_id: 11, item_text: 'functional programming' },
    ];
    this.selectedTags = [
    ];
    this.dropdownSettings = <IDropdownSettings>{
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  onItemSelect(item: any) {
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  get language(): string {
    return this.section.code.language;
  }

  set language(lang: string) {
    this.section.code = new Code(this.section.code.text, lang);
  }

  submit(): void {
    console.log('submitting section');

    if (!this.section.validate()) {
      this.failToast();
      return;
    }

    if (!this.section.tags)
      this.section.tags = [];
    for (let index = 0; index < this.selectedTags.length; index++) {
      this.section.tags.push(new Tag(this.selectedTags[index].item_text));
    }

    console.log(this.section);
    this.review.sections.push(this.section);
    this.codeSnippetsService.postReview(this.review).subscribe((review) => {
      console.log('got response from server to post review request');
      this.successToast();
      this.router.navigate(['/pages/point-of-review/feed']);
    });
  }

  AddCodeReviewSection() {
    console.log('adding section section');

    if (!this.section.validate()) {
      this.failToast();
      return;
    }

    if (!this.section.tags)
      this.section.tags = [];
    for (let index = 0; index < this.selectedTags.length; index++) {
      this.section.tags.push(new Tag(this.selectedTags[index].item_text));
    }

    console.log(this.section);
    this.review.sections.push(this.section);
    console.log(this.review);
    this.section = this.newSection();
  }
  successToast() {
    let status: NbComponentStatus = 'primary';
    this.showToast(status, 'congrats!', 'Your code review was created succesfuly');
  }

  failToast() {
    let status: NbComponentStatus = 'danger';
    this.showToast(status, 'Oops!', 'Some fields are missing, please fill them and try again');
  }
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 5000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true,
    };

    this.toastrService.show(
      body,
      title,
      config);
  }

}