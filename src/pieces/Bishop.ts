import { cellList } from '..';
import { Cell } from '../cells/Cell';
import { findCellsInDirection } from '../utils';
import { Color, Piece, PieceMovements } from './Piece';
const white_bishop_src = require('../images/white_bishop.png');
const black_bishop_src = require('../images/black_bishop.png');

class BishopMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    this.accessible_cells = [
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

export class WhiteBishop extends Piece {
  public color: Color = 'white';
  protected pieceMovements: PieceMovements = new BishopMovements();

  constructor(x: number, y: number) {
    super(x, y, white_bishop_src);
  }
}

export class BlackBishop extends Piece {
  public color: Color = 'black';
  protected pieceMovements: PieceMovements = new BishopMovements();

  constructor(x: number, y: number) {
    super(x, y, black_bishop_src);
  }
}
