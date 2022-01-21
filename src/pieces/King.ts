import { Cell } from '../cells/Cell';
import { Piece, PieceMovements } from './Piece';
import { cellList } from '../index';
const white_king_src = require('../images/white_king.png');
const black_king_src = require('../images/black_king.png');

class KingMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    this.accessible_cells = [
      cellList.getCell({ x: x + 1, y: y + 1 }),
      cellList.getCell({ x: x - 1, y: y + 1 }),
      cellList.getCell({ x: x - 1, y: y - 1 }),
      cellList.getCell({ x: x + 1, y: y - 1 }),
    ].filter((cell) => cell);
  }

  public clear(): void {
    this.accessible_cells = [];
  }
}

export class WhiteKing extends Piece {
  protected pieceMovements: PieceMovements = new KingMovements();

  constructor(x: number, y: number) {
    super(x, y, white_king_src);
  }
}

export class BlackKing extends Piece {
  protected pieceMovements: PieceMovements = new KingMovements();

  constructor(x: number, y: number) {
    super(x, y, black_king_src);
  }
}
