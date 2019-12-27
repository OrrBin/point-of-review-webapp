import { Component, OnInit } from '@angular/core';
import { CodeSnippet } from '../../../@core/lib/objects/code-snippet';
import { Code } from '../../../@core/lib/objects/code';
import { Score } from '../../../@core/lib/objects/score';
import { CodeSnippetsData } from '../../../@core/data/code-snippets';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Tag } from '../../../@core/lib/objects/tag';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';



@Component({
  selector: 'ngx-create-code-snippet',
  templateUrl: './create-code-snippet.component.html',
  styleUrls: ['./create-code-snippet.component.scss']
})
export class CreateCodeSnippetComponent implements OnInit {

  snippet: CodeSnippet;
  dropdownList = [];
  selectedTags: any[] = [];
  dropdownSettings = {};
  constructor(private codeSnippetsService: CodeSnippetsData, private toastrService: NbToastrService) {
    this.snippet = new CodeSnippet('', '', '', new Code('', 'javascript'), [], new Score(0, 0, 0, 0));
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
    return this.snippet.code.language;
  }

  set language(lang: string) {
    this.snippet.code = new Code(this.snippet.code.text, lang);
  }

  submit(): void {
    console.log('submitting snippet');

    if (!this.snippet.validate()) {
      this.failToast();
      return;
    }

    if (!this.snippet.tags)
      this.snippet.tags = [];
    for (let index = 0; index < this.selectedTags.length; index++) {
      this.snippet.tags.push(new Tag(this.selectedTags[index].item_text));
    }

    console.log(this.snippet);
    this.codeSnippetsService.postSnippet(this.snippet).subscribe((snippet) => {
      console.log('got response from server to post request');
      this.successToast();
      this.snippet = new CodeSnippet('', '', '', new Code('', 'javascript'), [], new Score(0, 0, 0, 0));
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
