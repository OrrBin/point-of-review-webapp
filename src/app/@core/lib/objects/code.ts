export class Code {
  private text: string;

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