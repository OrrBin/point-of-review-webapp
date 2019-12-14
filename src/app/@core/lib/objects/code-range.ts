import { RowRange } from './row-range';

export class CodeRange {
  private rows: RowRange[];

  constructor($rows: RowRange[]) {
    this.rows = $rows;
  }

  public get $rows(): RowRange[] {
    return this.rows;
  }

  public set $rows(value: RowRange[]) {
    this.rows = value;
  }

}