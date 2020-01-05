import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Code } from '../../../@core/lib/objects/code';
import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'ngx-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {


  _code: Code;
  @Output() codeChange = new EventEmitter<Code>();

  @Input()
  get code() {
    return this._code;
  }

  set code(code: Code) {
    this._code = code;
    this.editorOptions = { theme: 'vs-dark', language: code.language, readOnly: false };
    this.codeChange.emit(this._code)
  }

  editor;

  editorOptions = { theme: 'vs-dark', language: 'javascript', readOnly: false };
  codeStr: string = 'function x() {\nconsole.log("Hello world!");\n}';
  options = {
    theme: 'vs-dark'
  };
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
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
    let line = editor.getPosition();
  }
}
