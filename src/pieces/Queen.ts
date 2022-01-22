import { cellList } from '..';
import { Cell } from '../cells/Cell';
import { findCellsInDirection } from '../utils';
import { Color, Piece, PieceMovements } from './Piece';
const white_queen_src = require('../images/white_queen.png');
const black_queen_src = require('../images/black_queen.png');

class QueenMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    this.accessible_cells = [
      ...findCellsInDirection(x, y, 'left'),
      ...findCellsInDirection(x, y, 'right'),
      ...findCellsInDirection(x, y, 'up'),
      ...findCellsInDirection(x, y, 'down'),
      ...findCellsInDirection(x, y, 'up_left'),
      ...findCellsInDirection(x, y, 'up_right'),
      ...findCellsInDirection(x, y, 'down_left'),
      ...findCellsInDirection(x, y, 'down_right'),
    ];
  }

  public clear(): void {
    this.accessible_cells = [];
  }
}

export class WhiteQueen extends Piece {
  public color: Color = 'white';
  protected pieceMovements: PieceMovements = new QueenMovements();

  constructor(x: number, y: number) {
    super(x, y, white_queen_src);
  }
}

export class BlackQueen extends Piece {
  public color: Color = 'black';
  protected pieceMovements: PieceMovements = new QueenMovements();

  constructor(x: number, y: number) {
    super(x, y, black_queen_src);
  }
}
