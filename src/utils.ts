import { Cell } from './cells/Cell';
import { Piece } from './pieces/Piece';
import { game } from './Game';

export const $ = (query: string): HTMLDivElement =>
  document.querySelector(query);
export const $$ = (query: string) => [...document.querySelectorAll(query)];
export const $$$ = (element: HTMLElement, query: string) =>
  element.querySelector(query);

export type Direction =
  | 'left'
  | 'right'
  | 'up'
  | 'down'
  | 'up_left'
  | 'up_right'
  | 'down_left'
  | 'down_right';

export function findCellsInDirection(
  x: number,
  y: number,
  direction: Direction
): Cell[] {
  const accessible_cells: Cell[] = [];
  let cell: Cell = null;
  const ourPiece: Piece = game.getPiece({ x, y });
  let i = 1;

  while (true) {
    switch (direction) {
      case 'left':
        cell = game.getCell({ x: x - i, y });
        break;
      case 'right':
        cell = game.getCell({ x: x + i, y });
        break;
      case 'up':
        cell = game.getCell({ x, y: y - i });
        break;
      case 'down':
        cell = game.getCell({ x, y: y + i });
        break;
      case 'down_left':
        cell = game.getCell({ x: x - i, y: y + i });
        break;
      case 'down_right':
        cell = game.getCell({ x: x + i, y: y + i });
        break;
      case 'up_left':
        cell = game.getCell({ x: x - i, y: y - i });
        break;
      case 'up_right':
        cell = game.getCell({ x: x + i, y: y - i });
        break;
      default:
        return;
    }

    if (!cell) break;

    const otherPiece = game.getPiece({ x: cell.x, y: cell.y });

    if (cell.isOccupied() && otherPiece && ourPiece.isEnemy(otherPiece)) {
      accessible_cells.push(cell);
      break;
    } else if (cell.isOccupied()) {
      break;
    } else {
      accessible_cells.push(cell);
      i++;
    }
  }

  return accessible_cells;
}
