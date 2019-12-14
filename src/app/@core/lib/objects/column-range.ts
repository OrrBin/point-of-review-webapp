export class ColumnRange {
  private start: number;
  private end: number;


  constructor($start: number, $end: number) {
    this.start = $start;
    this.end = $end;
  }

  public get $start(): number {
    return this.start;
  }

  public get $end(): number {
    return this.end;
  }

  public set $start(value: number) {
    this.start = value;
  }

  public set $end(value: number) {
    this.end = value;
  }

}