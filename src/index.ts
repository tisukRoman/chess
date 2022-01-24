import { game } from './Game';
import { $ } from './utils';

game.init();

$('#field').addEventListener('click', (event) => {
  const target = event.target as Element;

  if (target.tagName == 'IMG') {
    const x = +target.getAttribute('x');
    const y = +target.getAttribute('y');
    const piece = game.getPiece({ x, y });

    if (piece) {
      const selectedPiece = game.getSelectedPiece();

      if (selectedPiece) {
        if (selectedPiece.isEnemy(piece)) {
          selectedPiece.attackAt(x, y);
        } else {
          clearSelectedPiece();
          piece.select();
        }
      } else {
        piece.select();
      }
    }
  } else {
    const x = +target.getAttribute('x');
    const y = +target.getAttribute('y');
    const piece = game.getSelectedPiece();
    if (piece) {
      piece.move(x, y);
      clearSelectedPiece();
    }
  }
});

document.addEventListener('click', (event) => {
  const target = event.target as Element;

  if (target.tagName != 'DIV' && target.tagName != 'IMG') {
    clearSelectedPiece();
  }
});

function clearSelectedPiece(): void {
  const selectedPiece = game.getSelectedPiece();
  if (selectedPiece) {
    selectedPiece.unselect();
  }
}
