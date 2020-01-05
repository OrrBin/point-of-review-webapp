import { Component, OnInit } from '@angular/core';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Code } from '../../../@core/lib/objects/code';
import { Score } from '../../../@core/lib/objects/score';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Tag } from '../../../@core/lib/objects/tag';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { StateService } from '../../../@core/utils';
import { Router } from '@angular/router';
import { AuthorizedComponentComponent } from '../authorized-component/authorized-component.component';

@Component({
  selector: 'ngx-create-code-snippet',
  templateUrl: './create-code-snippet.component.html',
  styleUrls: ['./create-code-snippet.component.scss']
})
export class CreateCodeSnippetComponent extends AuthorizedComponentComponent {

  snippet: CodeSnippet;
  dropdownList = [];
  selectedTags: any[] = [];
  dropdownSettings = {};
  constructor(private codeSnippetsService: CodeSnippetsData, state: StateService, router: Router, private toastrService: NbToastrService) {
    super(state, router);
    this.snippet = new CodeSnippet('', '', '', new Code('', 'javascript'), [], new Score(85, null, null));
    this.state.user.subscribe(user => {
      if (user) {
        this.snippet = new CodeSnippet('', this.currentUserName(), '', new Code('', 'javascript'), [], new Score(85, null, null));
      }
    });
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

  get language(): string {
    return this.snippet.code.language;
  }

  set language(lang: string) {
    this.snippet.code = new Code(this.snippet.code.text, lang);
  }

  submit(): void {
    if (!this.snippet.validate()) {
      this.failToast();
      return;
    }

    if (!this.snippet.tags)
      this.snippet.tags = [];
    for (let index = 0; index < this.selectedTags.length; index++) {
      this.snippet.tags.push(new Tag(this.selectedTags[index].item_text));
    }

    this.codeSnippetsService.postSnippet(this.snippet).subscribe((snippet) => {
      this.successToast();
      this.snippet = new CodeSnippet('', this.currentUserName(), '', new Code('', 'javascript'), [], new Score(0, null, null));
    }
    );
  }

  successToast() {
    let status: NbComponentStatus = 'primary';
    this.showToast(status, 'congrats!', 'Your code snippet was created succesfuly');
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
