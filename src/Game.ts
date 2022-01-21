class Game {
  public render(): void {
    const board = document.getElementById('field');
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        if ((i + j) % 2 === 0) {
          cell.classList.add('white');
        } else {
          cell.classList.add('black');
        }
        cell.setAttribute('x', `${j}`);
        cell.setAttribute('y', `${i}`);
        board.append(cell);
      }
    }
  }
}

export const game = new Game();
