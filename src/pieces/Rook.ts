import { cellList } from '..';
import { Cell } from '../cells/Cell';
import { Piece, PieceMovements } from './Piece';
const white_rook_src = require('../images/white_rook.png');
const black_rook_src = require('../images/black_rook.png');

class RookMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    for (let i = 0; i < 8; i++) {
      this.accessible_cells.push(cellList.getCell({ x: x, y: y - i }));
      this.accessible_cells.push(cellList.getCell({ x: x, y: y + i }));
      this.accessible_cells.push(cellList.getCell({ x: x - i, y: y }));
      this.accessible_cells.push(cellList.getCell({ x: x + i, y: y }));
    }
    this.accessible_cells = this.accessible_cells.filter((cell) => cell);
  }

  public clear(): void {
    this.accessible_cells = [];
  }
}

export class WhiteRook extends Piece {
  protected pieceMovements: PieceMovements = new RookMovements();

  constructor(x: number, y: number) {
    super(x, y, white_rook_src);
  }
}

export class BlackRook extends Piece {
  protected pieceMovements: PieceMovements = new RookMovements();

  constructor(x: number, y: number) {
    super(x, y, black_rook_src);
  }
}
