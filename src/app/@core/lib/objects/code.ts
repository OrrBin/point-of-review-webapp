export class Code {
  text: string;
  language: string;

  constructor($text: string) {
    this.text = $text;
  }

  public get $text(): string {
    return this.text;
  }

  public set $text(value: string) {
    this.text = value;
  }
}