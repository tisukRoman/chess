import { Cell } from '../cells/Cell';
import { Piece, PieceMovements } from './Piece';
import { cellList } from '../index';
const white_pawn_src = require('../images/white_pawn.png');
const black_pawn_src = require('../images/black_pawn.png');

class PawnMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];
  private made_move: boolean = false;

  constructor(public color: 'black' | 'white') {
    this.color = color;
  }

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    if (this.color === 'white') {
      if (!this.made_move) {
        this.accessible_cells.push(cellList.getCell({ x: x, y: y - 2 }));
      }
      this.accessible_cells.push(cellList.getCell({ x: x, y: y - 1 }));
      this.accessible_cells = this.accessible_cells.filter((cell) => cell);
    } else {
      if (!this.made_move) {
        this.accessible_cells.push(cellList.getCell({ x: x, y: y + 2 }));
      }
      this.accessible_cells.push(cellList.getCell({ x: x, y: y + 1 }));
      this.accessible_cells = this.accessible_cells.filter((cell) => cell);
    }
  }

  public clear(): void {
    this.accessible_cells = [];
  }

  public setMadeMove(): void {
    this.made_move = true;
  }
}

export class WhitePawn extends Piece {
  protected pieceMovements = new PawnMovements('white');

  constructor(x: number, y: number) {
    super(x, y, white_pawn_src);
  }

  public move(x: number, y: number): void {
    if (this.isCellAccessible(x, y)) {
      this.updateCoords(x, y);
      this.remove();
      this.append();
      this.pieceMovements.setMadeMove();
    } else {
      this.unselect();
    }
  }
}

export class BlackPawn extends Piece {
  protected pieceMovements = new PawnMovements('black');
  private madeMove: boolean = false;

  constructor(x: number, y: number) {
    super(x, y, black_pawn_src);
  }

  public move(x: number, y: number): void {
    if (this.isCellAccessible(x, y)) {
      this.updateCoords(x, y);
      this.remove();
      this.append();
      this.pieceMovements.setMadeMove();
    } else {
      this.unselect();
    }
  }
}
