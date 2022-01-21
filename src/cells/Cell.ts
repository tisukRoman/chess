import { $ } from '../utils';

export class Cell {
  constructor(
    public x: number,
    public y: number,
    public element: HTMLDivElement = null,
    private is_focused: boolean = false,
    private is_occupied: boolean = false
  ) {}

  public setFocused(): void {
    this.is_focused = true;
    const cellElem = $(`div[x="${this.x}"][y="${this.y}"]`);
    if (cellElem) {
      cellElem.classList.add('focus');
    }
  }

  public setUnfocused(): void {
    this.is_focused = false;
    const cellElem = $(`div[x="${this.x}"][y="${this.y}"]`);
    if (cellElem) {
      cellElem.classList.remove('focus');
    }
  }

  public setOccupied(state: boolean): void {
    this.is_occupied = state;
  }

  public isOccupied(): boolean {
    return this.is_occupied;
  }
}
