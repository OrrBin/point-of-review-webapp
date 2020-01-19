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
import { Router } from '@angular/router';
import { AuthorizedComponentComponent } from '../authorized-component/authorized-component.component';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {AuthService} from '../../../@core/services/auth.service';
import {Notification} from '../../../@core/lib/objects/notification';


@Component({
  selector: 'ngx-create-code-review',
  templateUrl: './create-code-review.component.html',
  styleUrls: ['./create-code-review.component.scss']
})
export class CreateCodeReviewComponent extends AuthorizedComponentComponent {
  snippet: CodeSnippet;
  review: CodeReview;
  section: CodeReviewSection;
  dropdownList = [];
  selectedTags: any[] = [];
  dropdownSettings = {};
  nameToType = new Map<string, string>();
  codeLang = undefined;
  auth: AuthService;

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

  constructor(auth: AuthService, private codeSnippetsService: CodeSnippetsData, state: StateService, private toastrService: NbToastrService,
    router: Router) {
    super(auth, state, router);
    this.auth = auth;
    this.section = this.newSection();
    this.state.selectedCodeSnippet.subscribe((snippet) => {
      this.snippet = snippet;
      this.codeLang = this.snippet.code.language.charAt(0).toUpperCase() + this.snippet.code.language.slice(1);
      if (this.snippet) {
        this.section.codeSnippetId = snippet.id;
        this.section.code = new Code(this.snippet.code.text, this.snippet.code.language);
      }
    });
    this.state.selectedCodeReview.subscribe((review) => {
      this.review = review;
      if (this.review) {
        this.section.codeReviewId = review.id;
        if (review.sections != null)
          this.section.id = '' + review.sections.length;
        else
          this.section.id = '' + 1;
      }
    });
  }

  newSection(): CodeReviewSection {
    let id: string = '';
    let code: Code = this.snippet == null ? new Code('', '') : new Code(this.snippet.code.text, this.snippet.code.language);
    return new CodeReviewSection(id, this.currentUserName(), this.snippet == null ? '' : this.snippet.id, this.review == null ? '' : this.review.id, new Score(0, new Map(), new Map()), code, '', []);
  }

  ngOnInit() {
    const dropdownList: any[] = []
    this.codeSnippetsService.getCodeSnippetTags().subscribe(tags => {
      for (let i = 0; i < tags.length; i++) {
        dropdownList[i] = {};
        dropdownList[i].item_id = i + 1;
        dropdownList[i].item_text = tags[i].name;
        dropdownList[i].item_text = dropdownList[i].item_text.charAt(0).toUpperCase() + dropdownList[i].item_text.slice(1);
        this.nameToType.set(dropdownList[i].item_text, tags[i].type);
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
    return this.section.code.language;
  }

  set language(lang: string) {
    this.section.code = new Code(this.section.code.text, lang);
  }

  submit(): void {
    if (this.review.sections.length == 0) {
      this.reviewFailToast();
      return;
    }

    this.codeSnippetsService.postReview(this.review).subscribe((review) => {
      this.successToast();
      const notification: Notification = new Notification(this.currentUserName(), this.snippet.username, 'REVIEW');
      notification.snippet = this.snippet;
      notification.review = this.review;
      this.auth.addNotification(notification).subscribe(null);
      this.router.navigate(['/pages/point-of-review/feed']);
    });
  }

  AddCodeReviewSection() {

    if (!this.section.validate()) {
      this.sectionFailToast();
      return;
    }

    if (!this.section.tags)
      this.section.tags = [];
    for (let index = 0; index < this.selectedTags.length; index++) {
      const tagName: string = this.selectedTags[index].item_text;
      this.section.tags.push(new Tag(tagName.toLowerCase(), this.nameToType.get(tagName)));
    }

    this.review.sections.push(this.section);
    this.sectionSuccessToast();
    this.section = this.newSection();
  }

  sectionSuccessToast() {
    let status: NbComponentStatus = 'primary';
    this.showToast(status, 'Your section was added', 'Add more sections, or submit the code review to finish');
  }

  reviewFailToast() {
    let status: NbComponentStatus = 'danger';
    this.showToast(status, 'Your code review is empty', 'Please add at least one section');
  }

  successToast() {
    let status: NbComponentStatus = 'success';
    this.showToast(status, 'Congrats!', 'Your code review was created successfully');
  }

  sectionFailToast() {
    let status: NbComponentStatus = 'danger';
    this.showToast(status, 'Oops!', 'Some fields are missing, please fill them and try again');
  }
  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 6500,
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
