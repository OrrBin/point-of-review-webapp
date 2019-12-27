import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Code } from '../../../@core/lib/objects/code';
import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'ngx-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements OnInit {


  _code: Code;
  @Output() codeChange = new EventEmitter<Code>();

  @Input()
  get code() {
    return this._code;
  }

  set code(code: Code) {
    this._code = code;
    console.log("setting language to: " + code.language);
    this.editorOptions = { theme: 'vs-dark', language: code.language, readOnly: true };
    this.codeChange.emit(this._code)
  }

  editor;

  editorOptions = { theme: 'vs-dark', language: 'javascript', readOnly: true };
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
    console.log(editor);
    let line = editor.getPosition();
    console.log(line);
  }
}
