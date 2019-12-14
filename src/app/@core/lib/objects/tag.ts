export class Tag {
  private name: string;

  constructor($name: string) {
    this.name = $name;
  }

  public get $name(): string {
    return this.name;
  }

  public set $name(value: string) {
    this.name = value;
  }

}