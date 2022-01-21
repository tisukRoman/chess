import { Cell } from '../cells/Cell';
import { Piece, PieceMovements } from './Piece';
import { cellList } from '../index';
const white_pawn_src = require('../images/white_pawn.png');
const black_pawn_src = require('../images/black_pawn.png');

class PawnMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];
  public madeMove: boolean = false;

  constructor(public color: 'black' | 'white') {
    this.color = color;
  }

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    if (this.color === 'white') {
      if (!this.madeMove) {
        this.accessible_cells.push(cellList.getCell({ x: x, y: y - 2 }));
        this.madeMove = true;
      }
      this.accessible_cells.push(cellList.getCell({ x: x, y: y - 1 }));
      this.accessible_cells = this.accessible_cells.filter((cell) => cell);
    } else {
      if (!this.madeMove) {
        this.accessible_cells.push(cellList.getCell({ x: x, y: y + 2 }));
        this.madeMove = true;
      }
      this.accessible_cells.push(cellList.getCell({ x: x, y: y + 1 }));
      this.accessible_cells = this.accessible_cells.filter((cell) => cell);
    }
  }

  public clear(): void {
    this.accessible_cells = [];
  }
}

export class WhitePawn extends Piece {
  protected pieceMovements: PieceMovements = new PawnMovements('white');

  constructor(x: number, y: number) {
    super(x, y, white_pawn_src);
  }
}

export class BlackPawn extends Piece {
  protected pieceMovements: PieceMovements = new PawnMovements('black');

  constructor(x: number, y: number) {
    super(x, y, black_pawn_src);
  }
}
