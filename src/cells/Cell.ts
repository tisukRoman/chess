import { Piece } from '../pieces/Piece';
import { $ } from '../utils';

export class Cell {
  constructor(
    public x: number,
    public y: number,
    public element: HTMLDivElement = null,
    public piece: Piece = null
  ) {
    this.element = $(`[coords="${this.y}${this.x}"]`);
  }
}
