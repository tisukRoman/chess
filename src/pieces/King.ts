import { Cell } from '../cells/Cell';
import { Color, Piece, PieceMovements } from './Piece';
import { cellList, pieceList } from '../index';
const white_king_src = require('../images/white_king.png');
const black_king_src = require('../images/black_king.png');

class KingMovements implements PieceMovements {
  public accessible_cells: Cell[] = [];

  public findAccessibleCells(piece: Piece): void {
    const x = piece.coords.x;
    const y = piece.coords.y;

    this.accessible_cells = [
      cellList.getCell({ x, y: y + 1 }),
      cellList.getCell({ x, y: y - 1 }),
      cellList.getCell({ x: x - 1, y }),
      cellList.getCell({ x: x + 1, y}),
      cellList.getCell({ x: x + 1, y: y + 1 }),
      cellList.getCell({ x: x - 1, y: y - 1 }),
      cellList.getCell({ x: x - 1, y: y + 1 }),
      cellList.getCell({ x: x + 1, y: y - 1}),

    ].filter((cell) => {
      if (!cell) return false;

      const pieceOnCell = pieceList.getPiece({ x: cell.x, y: cell.y });
      if (cell.isOccupied() && pieceOnCell && !pieceOnCell.isEnemy(piece)) {
        return false;
      } else {
        return true;
      }
    });
  }

  public clear(): void {
    this.accessible_cells = [];
  }
}

export class WhiteKing extends Piece {
  public color: Color = 'white';
  protected pieceMovements: PieceMovements = new KingMovements();

  constructor(x: number, y: number) {
    super(x, y, white_king_src);
  }
}

export class BlackKing extends Piece {
  public color: Color = 'black';
  protected pieceMovements: PieceMovements = new KingMovements();

  constructor(x: number, y: number) {
    super(x, y, black_king_src);
  }
}
