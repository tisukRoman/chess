import { Cell } from '../cells/Cell';
import { Color, Piece, PieceMovements } from './Piece';
import { cellList, pieceList } from '../index';
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
      this.accessible_cells = [
        ...this.accessible_cells,
        ...this.getEnemyCellsForWhite(x, y),
      ];
    } else {
      if (!this.made_move) {
        this.accessible_cells.push(cellList.getCell({ x: x, y: y + 2 }));
      }
      this.accessible_cells.push(cellList.getCell({ x: x, y: y + 1 }));
      this.accessible_cells = [
        ...this.accessible_cells,
        ...this.getEnemyCellsForBlack(x, y),
      ];
    }

    this.accessible_cells = this.accessible_cells.filter((cell) => {
      if (!cell) return false;
      else return true;
    });
  }

  public clear(): void {
    this.accessible_cells = [];
  }

  public setMadeMove(): void {
    this.made_move = true;
  }

  private getEnemyCellsForWhite(x: number, y: number): Cell[] {
    const ourPiece = pieceList.getPiece({ x, y });
    return [
      pieceList.getPiece({ x: x - 1, y: y - 1 }),
      pieceList.getPiece({ x: x + 1, y: y - 1 }),
    ]
      .filter((piece) => {
        if (!piece) return false;
        if (!piece.isEnemy(ourPiece)) return false;
        else return true;
      })
      .map((p) => {
        return cellList.getCell({ x: p.coords.x, y: p.coords.y });
      });
  }

  private getEnemyCellsForBlack(x: number, y: number) {
    const ourPiece = pieceList.getPiece({ x, y });
    return [
      pieceList.getPiece({ x: x - 1, y: y + 1 }),
      pieceList.getPiece({ x: x + 1, y: y + 1 }),
    ]
      .filter((piece) => {
        if (!piece) return false;
        if (!piece.isEnemy(ourPiece)) return false;
        else return true;
      })
      .map((p) => {
        return cellList.getCell({ x: p.coords.x, y: p.coords.y });
      });
  }
}

export class WhitePawn extends Piece {
  public color: Color = 'white';
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
  public color: Color = 'black';
  protected pieceMovements = new PawnMovements('black');

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
