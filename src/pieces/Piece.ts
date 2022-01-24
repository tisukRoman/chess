import { Cell } from '../cells/Cell';
import { game } from '../Game';

export type Coords = { x: number; y: number };
export type Color = 'white' | 'black';

export interface PieceMovements {
  accessible_cells: Cell[];
  findAccessibleCells(piece: Piece): void;
  clear(): void;
}

export abstract class Piece {
  protected element: HTMLImageElement;
  public color: 'white' | 'black';
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
      game.setSelectedPiece(this);
    }
  }

  public unselect(): void {
    this.unfocusCells();
    this.isSelected = false;
    game.setSelectedPiece(null);
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

  public attackAt(x: number, y: number): void {
    if (this.isCellAccessible(x, y) && this.isCellOccupied(x, y)) {
      const pieceToEat = game.getPiece({ x, y });
      if (this.isEnemy(pieceToEat)) {
        pieceToEat.remove();
        game.removePiece(pieceToEat);
        this.move(x, y);
        this.unselect();
      }
    }
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

  protected isCellOccupied(x: number, y: number): boolean {
    return game.getCell({ x, y }).isOccupied();
  }

  public isEnemy(piece: Piece): boolean {
    return piece.color !== this.color;
  }

  protected updateCoords(x: number, y: number): void {
    this.coords = { x: x, y: y };
  }

  protected remove(): void {
    this.element.remove();
    this.current_cell.setOccupied(false);
  }

  protected append(): void {
    this.element = document.createElement('img');
    this.element.src = this.src;
    this.element.setAttribute('x', `${this.coords.x}`);
    this.element.setAttribute('y', `${this.coords.y}`);
    this.current_cell = game.getCell({
      x: this.coords.x,
      y: this.coords.y,
    });
    this.current_cell.element.append(this.element);
    this.current_cell.setOccupied(true);
  }
}
