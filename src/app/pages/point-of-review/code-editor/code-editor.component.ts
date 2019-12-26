import { Component, OnInit, Input } from '@angular/core';
import { Code } from '../../../@core/lib/objects/code';

@Component({
  selector: 'ngx-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  @Input() code: Code;

  constructor() { }

  ngOnInit() {
  }

}
