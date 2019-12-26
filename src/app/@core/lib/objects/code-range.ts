import { RowRange } from './row-range';

export class CodeRange {
  rows: RowRange[];

  constructor($rows: RowRange[]) {
    this.rows = $rows;
  }

}