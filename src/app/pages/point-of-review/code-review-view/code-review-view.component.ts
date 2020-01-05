import { Component, OnInit, Input } from '@angular/core';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { CodeReview } from '../../../@core/lib/objects/code-review';
import { CodeReviewSection } from '../../../@core/lib/objects/code-review-section';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { StateService } from '../../../@core/utils';
import { NbToastrService } from '@nebular/theme';
import { Code } from '../../../@core/lib/objects/code';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Tag } from '../../../@core/lib/objects/tag';

@Component({
  selector: 'ngx-code-review-view',
  templateUrl: './code-review-view.component.html',
  styleUrls: ['./code-review-view.component.scss']
})
export class CodeReviewViewComponent implements OnInit {

  options = {
    theme: 'vs-dark'
  };

  @Input()
  snippet: CodeSnippet;
  @Input()
  review: CodeReview;
  @Input()
  section: CodeReviewSection;

  dropdownList = [];
  selectedTags: any[] = [];
  dropdownSettings = {};
  constructor(private codeSnippetsService: CodeSnippetsData, private state: StateService, private toastrService: NbToastrService) {
  }

  ngOnInit() {
  }

  get language(): string {
    return this.section.code.language;
  }
}
