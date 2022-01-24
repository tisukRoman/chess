import { $ } from '../utils';
import { Cell } from './Cell';
import { Coords } from '../pieces/Piece';

export class CellList {
  public cells: Cell[] = [];

  public getCell(coords: Coords): Cell {
    return this.cells.find((c) => c.x === coords.x && c.y === coords.y);
  }

  private addCell(cell: Cell): void {
    this.cells.push(cell);
  }

  static createCellList(): CellList {
    let cellList = new CellList();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        cellList.addCell(new Cell(i, j, $(`div[x="${i}"][y="${j}"]`)));
      }
    }
    return cellList;
  }
}
