import { Code } from './code';
import { CodeRange } from './code-range';

export class CodeChunk {
  codeSnippetId: string;
  range: CodeRange[];
  code: Code;

  constructor($codeSnippetId: string, $range: CodeRange[], $code: Code) {
    this.codeSnippetId = $codeSnippetId;
    this.range = $range;
    this.code = $code;
  }

}