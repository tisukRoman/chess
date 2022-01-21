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
    clearSelectedPiece();
    const x = +target.getAttribute('x');
    const y = +target.getAttribute('y');
    const piece = pieceList.getPiece({ x, y });
    if (piece) {
      piece.select();
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

function clearSelectedPiece(): void {
  const selectedPiece = pieceList.getSelectedPiece();
  if (selectedPiece) {
    selectedPiece.unselect();
  }
}
