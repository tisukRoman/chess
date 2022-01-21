import { Cell } from '../cells/Cell';
import { Piece, PieceMovements } from './Piece';
import { cellList } from './../index';
const white_knight_src = require('../images/white_knight.png');

class WhiteKingMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    this.accessible_cells = [
      cellList.getCell({ x: x - 1, y: y - 2 }),
      cellList.getCell({ x: x + 1, y: y - 2 }),
      cellList.getCell({ x: x - 2, y: y - 1 }),
      cellList.getCell({ x: x + 2, y: y - 1 }),
      cellList.getCell({ x: x - 1, y: y + 2 }),
      cellList.getCell({ x: x + 1, y: y + 2 }),
      cellList.getCell({ x: x - 2, y: y + 1 }),
      cellList.getCell({ x: x + 2, y: y + 1 }),
    ].filter((cell) => cell);
  }

  public clear(): void {
    this.accessible_cells = [];
  }
}

export class WhiteKnight extends Piece {
  protected pieceMovements: PieceMovements = new WhiteKingMovements();

  constructor(x: number, y: number) {
    super(x, y, white_knight_src);
  }
}
