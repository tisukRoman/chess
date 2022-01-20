import { Cell } from '../cells/Cell';
import { cellList } from '../cells/CellList';

export interface PieceMovements {
  possible_moves: HTMLDivElement[];
  findPossibleMoves(): void;
}

export abstract class Piece {
  protected element: HTMLImageElement;
  protected coords: { x: number; y: number };
  protected current_cell: Cell;
  protected selected: boolean = false;
  protected src: string;
  protected pieceMovements: PieceMovements;

  constructor(x: number, y: number, src: string) {
    this.coords = { x: x, y: y };
    this.element = document.createElement('img');
    this.src = src;
    this.element.src = src;
    this.current_cell = cellList.getCell(`${this.coords.y}${this.coords.x}`);
    this.show();
  }

  public select(): void {
    if (this.isSelected()) {
      this.unselect();
      return;
    }
    this.findPossibleMoves();
    this.setSelected();
  }

  public move(x: number, y: number): void {
    this.changePosition(x, y);
    this.show();
  }

  protected isSelected(): boolean {
    return this.selected;
  }

  protected setSelected(): void {
    this.selected = true;
  }

  protected unselect(): void {
    // TODO
  }

  protected findPossibleMoves(): void {
    this.pieceMovements.findPossibleMoves();
    // TODO
  }

  protected changePosition(x: number, y: number): void {
    this.element.remove();
    this.coords = { x: x, y: y };
    this.current_cell = cellList.getCell(`${this.coords.x}${this.coords.y}`);
  }

  protected show(): void {
    this.element = document.createElement('img');
    this.element.src = this.src;
    this.current_cell.piece = this;
  }
}
