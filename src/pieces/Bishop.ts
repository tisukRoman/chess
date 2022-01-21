import { cellList } from '..';
import { Cell } from '../cells/Cell';
import { Piece, PieceMovements } from './Piece';
const white_bishop_src = require('../images/white_bishop.png');
const black_bishop_src = require('../images/black_bishop.png');

class BishopMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    for (let i = 0; i < 8; i++) {
      this.accessible_cells.push(cellList.getCell({ x: x + i, y: y + i }));
      this.accessible_cells.push(cellList.getCell({ x: x - i, y: y + i }));
      this.accessible_cells.push(cellList.getCell({ x: x - i, y: y - i }));
      this.accessible_cells.push(cellList.getCell({ x: x + i, y: y - i }));
    }
    this.accessible_cells = this.accessible_cells.filter((cell) => cell);
  }

  public clear(): void {
    this.accessible_cells = [];
  }
}

export class WhiteBishop extends Piece {
  protected pieceMovements: PieceMovements = new BishopMovements();

  constructor(x: number, y: number) {
    super(x, y, white_bishop_src);
  }
}

export class BlackBishop extends Piece {
  protected pieceMovements: PieceMovements = new BishopMovements();

  constructor(x: number, y: number) {
    super(x, y, black_bishop_src);
  }
}
