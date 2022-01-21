import { Coords, Piece } from './Piece';
import { WhiteKnight, BlackKnight } from './Knight';
import { BlackRook, WhiteRook } from './Rook';
import { BlackBishop, WhiteBishop } from './Bishop';
import { BlackQueen, WhiteQueen } from './Queen';
import { BlackKing, WhiteKing } from './King';
import { BlackPawn, WhitePawn } from './Pawn';

export class PieceList {
  private pieces: Piece[] = [];
  private eaten_pieces: Piece[] = [];
  private selected_piece: Piece | null;

  public removePiece(piece: Piece): void {
    this.pieces = this.pieces.filter(
      (p) => p.coords.x !== piece.coords.x || p.coords.y !== piece.coords.y
    );
    this.addToEaten(piece);
  }

  private addToEaten(piece: Piece): void {
    this.eaten_pieces.push(piece);
  }

  public getSelectedPiece(): Piece {
    return this.selected_piece;
  }

  public setSelectedPiece(piece: Piece | null): void {
    this.selected_piece = piece;
  }

  public getPiece(coords: Coords): Piece {
    return this.pieces.find(
      (p) => p.coords.x === coords.x && p.coords.y === coords.y
    );
  }

  private addPiece(piece: Piece): void {
    this.pieces.push(piece);
  }

  static createPieceList(): PieceList {
    let pieceList = new PieceList();

    pieceList.addPiece(new WhiteKnight(6, 7));
    pieceList.addPiece(new WhiteKnight(1, 7));
    pieceList.addPiece(new WhiteRook(7, 7));
    pieceList.addPiece(new WhiteRook(0, 7));
    pieceList.addPiece(new WhiteBishop(2, 7));
    pieceList.addPiece(new WhiteBishop(5, 7));
    pieceList.addPiece(new WhiteQueen(3, 7));
    pieceList.addPiece(new WhiteKing(4, 7));

    for (let i = 0; i < 8; i++) {
      pieceList.addPiece(new WhitePawn(i, 6));
    }

    pieceList.addPiece(new BlackKnight(6, 0));
    pieceList.addPiece(new BlackKnight(1, 0));
    pieceList.addPiece(new BlackRook(7, 0));
    pieceList.addPiece(new BlackRook(0, 0));
    pieceList.addPiece(new BlackBishop(2, 0));
    pieceList.addPiece(new BlackBishop(5, 0));
    pieceList.addPiece(new BlackQueen(3, 0));
    pieceList.addPiece(new BlackKing(4, 0));

    for (let i = 0; i < 8; i++) {
      pieceList.addPiece(new BlackPawn(i, 1));
    }

    return pieceList;
  }
}
