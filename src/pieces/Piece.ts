import { Cell } from '../cells/Cell';
import { pieceList, cellList } from '../index';

export type Coords = { x: number; y: number };

export interface PieceMovements {
  accessible_cells: Cell[];
  findAccessibleCells(piece: Piece): void;
  clear(): void;
}

export abstract class Piece {
  protected element: HTMLImageElement;
  public coords: Coords;
  protected current_cell: Cell;
  protected isSelected: boolean = false;
  protected src: string;
  protected pieceMovements: PieceMovements;

  constructor(x: number, y: number, src: string) {
    this.coords = { x: x, y: y };
    this.src = src;
    this.append();
  }

  public select(): void {
    if (this.isSelected) {
      this.unselect();
    } else {
      this.focusCells();
      this.isSelected = true;
      pieceList.setSelectedPiece(this);
    }
  }

  public unselect(): void {
    this.unfocusCells();
    this.isSelected = false;
    pieceList.setSelectedPiece(null);
  }

  protected focusCells(): void {
    this.pieceMovements.findAccessibleCells(this);
    this.pieceMovements.accessible_cells.forEach((cell) => {
      cell.setFocused();
    });
  }

  protected unfocusCells(): void {
    this.pieceMovements.accessible_cells.forEach((cell) => {
      cell.setUnfocused();
    });
    this.pieceMovements.clear();
  }

  public move(x: number, y: number): void {
    if (this.isCellAccessible(x, y)) {
      this.updateCoords(x, y);
      this.remove();
      this.append();
    } else {
      this.unselect();
    }
  }

  protected isCellAccessible(x: number, y: number): boolean {
    return this.pieceMovements.accessible_cells.some((cell) => {
      return cell.x === x && cell.y === y;
    });
  }

  protected updateCoords(x: number, y: number): void {
    this.coords = { x: x, y: y };
  }

  protected remove(): void {
    this.element.remove();
  }

  protected append(): void {
    this.element = document.createElement('img');
    this.element.src = this.src;
    this.element.setAttribute('x', `${this.coords.x}`);
    this.element.setAttribute('y', `${this.coords.y}`);
    this.current_cell = cellList.getCell({
      x: this.coords.x,
      y: this.coords.y,
    });
    this.current_cell.element.append(this.element);
  }
}
