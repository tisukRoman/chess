import { cellList } from '..';
import { Cell } from '../cells/Cell';
import { findCellsInDirection } from '../utils';
import { Color, Piece, PieceMovements } from './Piece';
const white_rook_src = require('../images/white_rook.png');
const black_rook_src = require('../images/black_rook.png');

class RookMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    this.accessible_cells = [
      ...findCellsInDirection(x, y, 'left'),
      ...findCellsInDirection(x, y, 'right'),
      ...findCellsInDirection(x, y, 'up'),
      ...findCellsInDirection(x, y, 'down'),
    ];
  }

  public clear(): void {
    this.accessible_cells = [];
  }
}

export class WhiteRook extends Piece {
  public color: Color = 'white';
  protected pieceMovements: PieceMovements = new RookMovements();

  constructor(x: number, y: number) {
    super(x, y, white_rook_src);
  }
}

export class BlackRook extends Piece {
  public color: Color = 'black';
  protected pieceMovements: PieceMovements = new RookMovements();

  constructor(x: number, y: number) {
    super(x, y, black_rook_src);
  }
}
