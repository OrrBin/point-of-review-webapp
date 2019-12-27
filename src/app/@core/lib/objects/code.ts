export class Code {
  text: string;
  language: string;

  constructor($text: string, $language: string) {
    this.text = $text;
    this.language = $language;
  }

  validate(): boolean {
    if (!this.text || !this.language)
      return false;

    return true;
  }
}