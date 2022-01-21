import { game } from './Game';
import { CellList } from './cells/CellList';
import { PieceList } from './pieces/PieceList';
import { $ } from './utils';

game.render();
export const cellList = CellList.createCellList();
export const pieceList = PieceList.createPieceList();

$('#field').addEventListener('click', (event) => {
  const target = event.target as Element;

  if (target.tagName == 'IMG') {
    const x = +target.getAttribute('x');
    const y = +target.getAttribute('y');
    const piece = pieceList.getPiece({ x, y });

    if (piece) {
      const selectedPiece = pieceList.getSelectedPiece();

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
    const piece = pieceList.getSelectedPiece();
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
  const selectedPiece = pieceList.getSelectedPiece();
  if (selectedPiece) {
    selectedPiece.unselect();
  }
}
