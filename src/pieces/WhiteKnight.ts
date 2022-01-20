import { Piece } from './Piece';
const white_knight_src = require('../images/white_knight.png');

export class WhiteKnight extends Piece {
  constructor(x: number, y: number) {
    super(x, y, white_knight_src);
  }
}
