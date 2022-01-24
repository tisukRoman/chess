import { Cell } from './cells/Cell';
import { CellList } from './cells/CellList';
import { Coords, Piece } from './pieces/Piece';
import { PieceList } from './pieces/PieceList';

class Game {
  public cellList: CellList;
  public pieceList: PieceList;

  public init(): void {
    this.render();
    this.cellList = CellList.createCellList();
    this.pieceList = PieceList.createPieceList();
  }

  public render(): void {
    const board = document.getElementById('field');
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        if ((i + j) % 2 === 0) {
          cell.classList.add('white');
        } else {
          cell.classList.add('black');
        }
        cell.setAttribute('x', `${j}`);
        cell.setAttribute('y', `${i}`);
        board.append(cell);
      }
    }
  }

  public getCell(coords: Coords): Cell {
    return this.cellList.getCell(coords);
  }

  public getPiece(coords: Coords): Piece {
    return this.pieceList.getPiece(coords);
  }

  public removePiece(piece: Piece): void {
    this.pieceList.removePiece(piece);
  }

  public getSelectedPiece(): Piece {
    return this.pieceList.getSelectedPiece();
  }

  public setSelectedPiece(piece: Piece | null): void {
    this.pieceList.setSelectedPiece(piece);
  }
}

export const game = new Game();
