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
import { AngularEditorConfig } from '@kolkov/angular-editor/lib/config';
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
  nameToType = new Map<string, string>();

  constructor(private codeSnippetsService: CodeSnippetsData, state: StateService, router: Router, private toastrService: NbToastrService) {
    super(state, router);
    this.snippet = new CodeSnippet('', 0, '', '', new Code('', 'javascript'), [], new Score(85, null, null));
    this.state.user.subscribe(user => {
      if (user) {
        this.snippet = new CodeSnippet('', 0, this.currentUserName(), '', new Code('', 'javascript'), [], new Score(85, null, null));
      }
    });
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter the description here',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ]
  };
  onItemSelect(item: any) {
    console.log(item);
  }

  ngOnInit() {
    this.codeSnippetsService.getTagList().subscribe(tags => {
      const dropdownList: any[] = []

      for (let i = 0; i < tags.length; i++) {
        dropdownList[i] = {};
        dropdownList[i].item_id = i + 1;
        dropdownList[i].item_text = tags[i].name;
        this.nameToType.set(tags[i].name, tags[i].type);
      }
      this.dropdownList = dropdownList;
      console.log(this.dropdownList);
    });

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
    this.snippet.tags.push(new Tag(this.snippet.code.language, 'language'));
    for (let index = 0; index < this.selectedTags.length; index++) {
      const tagName: string = this.selectedTags[index].item_text;
      this.snippet.tags.push(new Tag(tagName, this.nameToType.get(tagName)));
    }

    this.codeSnippetsService.postSnippet(this.snippet).subscribe((snippet) => {
      this.successToast();
      this.snippet = new CodeSnippet('', 0, this.currentUserName(), '', new Code('', 'javascript'), [], new Score(0, null, null));
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
