import { Coords, Piece } from './Piece';
import { WhiteKnight } from './WhiteKnight';

export class PieceList {
  private pieces: Piece[] = [];
  private selected_piece: Piece | null;

  public getSelectedPiece(): Piece {
    return this.selected_piece;
  }

  public setSelectedPiece(piece: Piece | null): void {
    this.selected_piece = piece;
  }

  public addPiece(piece: Piece): void {
    this.pieces.push(piece);
  }

  public getPiece(coords: Coords): Piece {
    return this.pieces.find(
      (p) => p.coords.x === coords.x && p.coords.y === coords.y
    );
  }

  static createPieceList(): PieceList {
    let pieceList = new PieceList();

    pieceList.addPiece(new WhiteKnight(6, 7));
    pieceList.addPiece(new WhiteKnight(4, 4));
    pieceList.addPiece(new WhiteKnight(7, 1));
    pieceList.addPiece(new WhiteKnight(0, 0));

    return pieceList;
  }
}
