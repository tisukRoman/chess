import { Cell } from './Cell';

class CellList {
  constructor(private cells: Cell[] = []) {}

  private addCell(cell: Cell): void {
    this.cells.push(cell);
  }

  public getCell(coords: string): Cell {
    const x = +coords[1];
    const y = +coords[0];
    return this.cells.find((c) => c.x === x && c.y === y);
  }

  static createCellList(): CellList {
    let cellList = new CellList();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        cellList.addCell(new Cell(i, j));
      }
    }
    return cellList;
  }
}

export const cellList = CellList.createCellList();
