import { cellList } from '..';
import { Cell } from '../cells/Cell';
import { Color, Piece, PieceMovements } from './Piece';
const white_queen_src = require('../images/white_queen.png');
const black_queen_src = require('../images/black_queen.png');

class QueenMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    for (let i = 0; i < 8; i++) {
      this.accessible_cells.push(cellList.getCell({ x: x, y: y - i }));
      this.accessible_cells.push(cellList.getCell({ x: x, y: y + i }));
      this.accessible_cells.push(cellList.getCell({ x: x - i, y: y }));
      this.accessible_cells.push(cellList.getCell({ x: x + i, y: y }));
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
