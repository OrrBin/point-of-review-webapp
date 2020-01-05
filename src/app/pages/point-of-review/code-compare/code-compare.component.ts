import { Component, OnInit, Input, Output } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';
import { Code } from '../../../@core/lib/objects/code';

@Component({
  selector: 'ngx-code-compare',
  templateUrl: './code-compare.component.html',
  styleUrls: ['./code-compare.component.scss']
})
export class CodeCompareComponent implements OnInit {

  _originalCode: Code;
  _modifiedCode: Code;


  @Input()
  get originalCode() {
    return this._originalCode;
  }

  set originalCode(code: Code) {
    this._originalCode = code;
    console.log("setting language to: " + code.language);
    this.options = { theme: 'vs-dark' };
    this.originalModel = {
      code: this._originalCode.text,
      language: this._originalCode.language
    };

    // this.modifiedModel = {
    //   code: this._modifiedCode.text,
    //   language: this._modifiedCode.language
    // };
  }

  @Input()
  get modifiedCode() {
    return this._modifiedCode;
  }

  set modifiedCode(code: Code) {
    this._modifiedCode = code;
    this.options = { theme: 'vs-dark' };
    // this.originalModel = {
    //   code: this._originalCode.text,
    //   language: this._originalCode.language
    // };

    this.modifiedModel = {
      code: this._modifiedCode.text,
      language: this._modifiedCode.language
    };
  }
  editor;

  editorOptions = { theme: 'vs-dark', language: 'javascript', readOnly: false };
  codeStr: string = 'function x() {\nconsole.log("Hello world!");\n}';
  options = {
    theme: 'vs-dark'
  };
  originalModel: DiffEditorModel = {
    code: '',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: '',
    language: 'text/plain'
  };
  constructor() { }

  interval;

  ngOnInit() {
  }


  ngOnDestroy(): void {
    clearInterval(this.interval);

  }

  onInitEditor(editor) {
    this.editor = editor;
    console.log(editor);
    let line = editor.getPosition();
    console.log(line);
  }
}