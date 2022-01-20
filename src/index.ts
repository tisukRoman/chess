import { game } from './Game';
import { WhiteKnight } from './pieces/WhiteKnight';
import { $ } from './utils';

game.render();

const k1 = new WhiteKnight(6, 7);

console.log(k1);

$('#field').addEventListener('click', (event) => {});
