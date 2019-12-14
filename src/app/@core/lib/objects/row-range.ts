import { ColumnRange } from './column-range';

export class RowRange {
  private rowNum: number;
  private columns: ColumnRange[];


  constructor($rowNum: number, $columns: ColumnRange[]) {
    this.rowNum = $rowNum;
    this.columns = $columns;
  }


  public get $rowNum(): number {
    return this.rowNum;
  }

  public get $columns(): ColumnRange[] {
    return this.columns;
  }

  public set $rowNum(value: number) {
    this.rowNum = value;
  }

  public set $columns(value: ColumnRange[]) {
    this.columns = value;
  }

}