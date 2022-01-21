import { $ } from '../utils';

export class Cell {
  constructor(
    public x: number,
    public y: number,
    public element: HTMLDivElement = null,
    public is_focused: boolean = false
  ) {}

  public setFocused(): void {
    this.is_focused = true;
    const cellElem = $(`div[x="${this.x}"][y="${this.y}"]`);
    if (cellElem) {
      cellElem.classList.add('focus');
    }
  }

  setUnfocused(): void {
    this.is_focused = false;
    const cellElem = $(`div[x="${this.x}"][y="${this.y}"]`);
    if (cellElem) {
      cellElem.classList.remove('focus');
    }
  }
}
