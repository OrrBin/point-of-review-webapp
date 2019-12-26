import { ColumnRange } from './column-range';

export class RowRange {
  rowNum: number;
  columns: ColumnRange[];


  constructor($rowNum: number, $columns: ColumnRange[]) {
    this.rowNum = $rowNum;
    this.columns = $columns;
  }
}