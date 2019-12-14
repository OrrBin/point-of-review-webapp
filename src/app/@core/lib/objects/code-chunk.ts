import { Code } from './code';
import { CodeRange } from './code-range';

export class CodeChunk {

  private codeSnippetId: string;
  private range: CodeRange[];
  private code: Code;


  constructor($codeSnippetId: string, $range: CodeRange[], $code: Code) {
    this.codeSnippetId = $codeSnippetId;
    this.range = $range;
    this.code = $code;
  }

  public get $codeSnippetId(): string {
    return this.codeSnippetId;
  }

  public get $range(): CodeRange[] {
    return this.range;
  }

  public get $code(): Code {
    return this.code;
  }

  public set $codeSnippetId(value: string) {
    this.codeSnippetId = value;
  }

  public set $range(value: CodeRange[]) {
    this.range = value;
  }

  public set $code(value: Code) {
    this.code = value;
  }

}