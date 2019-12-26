import { Component, OnInit, Input } from '@angular/core';
import { Code } from '../../../@core/lib/objects/code';
import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'ngx-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {


  // @Input() code: Code;

  editor;

  editorOptions = { theme: 'vs-light', language: 'javascript', readOnly: true };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  options = {
    theme: 'vs-light'
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

  ngOnInit() {
  }


  onInit(editor) {
    this.editor = editor;
    console.log(editor);
    let line = editor.getPosition();
    console.log(line);
  }
}
