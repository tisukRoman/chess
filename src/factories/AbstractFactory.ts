import { Piece } from '../pieces/Piece';

export interface Factory {
  createPiece(): Piece;
}
