import { Cell } from '../cells/Cell';
import { Color, Piece, PieceMovements } from './Piece';
import { cellList } from '../index';
const white_knight_src = require('../images/white_knight.png');
const black_knight_src = require('../images/black_knight.png');

class KnightMovements implements PieceMovements {
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
  public color: Color = 'white';
  protected pieceMovements: PieceMovements = new KnightMovements();

  constructor(x: number, y: number) {
    super(x, y, white_knight_src);
  }
}

export class BlackKnight extends Piece {
  public color: Color = 'black';
  protected pieceMovements: PieceMovements = new KnightMovements();

  constructor(x: number, y: number) {
    super(x, y, black_knight_src);
  }
}
