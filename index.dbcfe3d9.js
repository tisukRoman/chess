function e(e,s,t,c){Object.defineProperty(e,s,{get:t,set:c,enumerable:!0,configurable:!0})}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},c={},i=s.parcelRequire94c2;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in c){var s=c[e];delete c[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,s){c[e]=s},s.parcelRequire94c2=i),i.register("bXuNP",(function(s,t){var c,i;e(s.exports,"register",(()=>c),(e=>c=e)),e(s.exports,"resolve",(()=>i),(e=>i=e));var l={};c=function(e){for(var s=Object.keys(e),t=0;t<s.length;t++)l[s[t]]=e[s[t]]},i=function(e){var s=l[e];if(null==s)throw new Error("Could not resolve bundle with id "+e);return s}})),i.register("kPq84",(function(s,t){var c;e(s.exports,"getBundleURL",(()=>c),(e=>c=e));var i={};function l(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}c=function(e){var s=i[e];return s||(s=function(){try{throw new Error}catch(s){var e=(""+s.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return l(e[2])}return"/"}(),i[e]=s),s}})),i("bXuNP").register(JSON.parse('{"d3X8m":"index.dbcfe3d9.js","7KVMx":"white_knight.1719dd90.png","dnuxZ":"black_knight.0f034863.png","bOh5e":"white_rook.ff2dc81b.png","2jwle":"black_rook.2c91544a.png","GyZkq":"white_bishop.901abe5c.png","bWWKl":"black_bishop.5e336bb7.png","ceTcT":"white_queen.3a6339a2.png","e7UnK":"black_queen.d1ad34bf.png","1V5jw":"white_king.97daba3e.png","7EsJv":"black_king.ac1018c3.png","lyTiA":"white_pawn.26c10afd.png","cc5xi":"black_pawn.307be4c1.png"}'));const l=new class{render(){const e=document.getElementById("field");for(let s=0;s<8;s++)for(let t=0;t<8;t++){const c=document.createElement("div");c.classList.add("cell"),(s+t)%2==0?c.classList.add("white"):c.classList.add("black"),c.setAttribute("x",`${t}`),c.setAttribute("y",`${s}`),e.append(c)}}},r=e=>document.querySelector(e);function o(e,s,t){const c=[];let i=null;const l=K.getPiece({x:e,y:s});let r=1;for(;;){switch(t){case"left":i=j.getCell({x:e-r,y:s});break;case"right":i=j.getCell({x:e+r,y:s});break;case"up":i=j.getCell({x:e,y:s-r});break;case"down":i=j.getCell({x:e,y:s+r});break;case"down_left":i=j.getCell({x:e-r,y:s+r});break;case"down_right":i=j.getCell({x:e+r,y:s+r});break;case"up_left":i=j.getCell({x:e-r,y:s-r});break;case"up_right":i=j.getCell({x:e+r,y:s-r});break;default:return}if(!i)break;const o=K.getPiece({x:i.x,y:i.y});if(i.isOccupied()&&o&&l.isEnemy(o)){c.push(i);break}if(i.isOccupied())break;c.push(i),r++}return c}class n{constructor(e,s,t=null,c=!1,i=!1){this.x=e,this.y=s,this.element=t,this.is_focused=c,this.is_occupied=i}setFocused(){this.is_focused=!0;const e=r(`div[x="${this.x}"][y="${this.y}"]`);e&&e.classList.add("focus")}setUnfocused(){this.is_focused=!1;const e=r(`div[x="${this.x}"][y="${this.y}"]`);e&&e.classList.remove("focus")}setOccupied(e){this.is_occupied=e}isOccupied(){return this.is_occupied}}class d{addCell(e){this.cells.push(e)}getCell(e){return this.cells.find((s=>s.x===e.x&&s.y===e.y))}static createCellList(){let e=new d;for(let s=0;s<8;s++)for(let t=0;t<8;t++)e.addCell(new n(s,t,r(`div[x="${s}"][y="${t}"]`)));return e}constructor(){this.cells=[]}}class a{constructor(e,s,t){this.isSelected=!1,this.coords={x:e,y:s},this.src=t,this.append()}select(){this.isSelected?this.unselect():(this.focusCells(),this.isSelected=!0,K.setSelectedPiece(this))}unselect(){this.unfocusCells(),this.isSelected=!1,K.setSelectedPiece(null)}focusCells(){this.pieceMovements.findAccessibleCells(this),this.pieceMovements.accessible_cells.forEach((e=>{e.setFocused()}))}unfocusCells(){this.pieceMovements.accessible_cells.forEach((e=>{e.setUnfocused()})),this.pieceMovements.clear()}attackAt(e,s){if(this.isCellAccessible(e,s)&&this.isCellOccupied(e,s)){const t=K.getPiece({x:e,y:s});this.isEnemy(t)&&(t.remove(),K.removePiece(t),this.move(e,s),this.unselect())}}move(e,s){this.isCellAccessible(e,s)?(this.updateCoords(e,s),this.remove(),this.append()):this.unselect()}isCellAccessible(e,s){return this.pieceMovements.accessible_cells.some((t=>t.x===e&&t.y===s))}isCellOccupied(e,s){return j.getCell({x:e,y:s}).isOccupied()}isEnemy(e){return e.color!==this.color}updateCoords(e,s){this.coords={x:e,y:s}}remove(){this.element.remove(),this.current_cell.setOccupied(!1)}append(){this.element=document.createElement("img"),this.element.src=this.src,this.element.setAttribute("x",`${this.coords.x}`),this.element.setAttribute("y",`${this.coords.y}`),this.current_cell=j.getCell({x:this.coords.x,y:this.coords.y}),this.current_cell.element.append(this.element),this.current_cell.setOccupied(!0)}}var h;h=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("7KVMx");var u;u=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("dnuxZ");class p{findAccessibleCells(e){const s=e.coords.x,t=e.coords.y;this.accessible_cells=[j.getCell({x:s-1,y:t-2}),j.getCell({x:s+1,y:t-2}),j.getCell({x:s-2,y:t-1}),j.getCell({x:s+2,y:t-1}),j.getCell({x:s-1,y:t+2}),j.getCell({x:s+1,y:t+2}),j.getCell({x:s-2,y:t+1}),j.getCell({x:s+2,y:t+1})].filter((s=>{if(!s)return!1;const t=K.getPiece({x:s.x,y:s.y});return!(s.isOccupied()&&t&&!t.isEnemy(e))}))}clear(){this.accessible_cells=[]}constructor(){this.accessible_cells=[]}}class g extends a{constructor(e,s){super(e,s,h),this.color="white",this.pieceMovements=new p}}class b extends a{constructor(e,s){super(e,s,u),this.color="black",this.pieceMovements=new p}}var f;f=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("bOh5e");var x;x=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("2jwle");class y{findAccessibleCells(e){const s=e.coords.x,t=e.coords.y;this.accessible_cells=[...o(s,t,"left"),...o(s,t,"right"),...o(s,t,"up"),...o(s,t,"down")]}clear(){this.accessible_cells=[]}constructor(){this.accessible_cells=[]}}class _ extends a{constructor(e,s){super(e,s,f),this.color="white",this.pieceMovements=new y}}class m extends a{constructor(e,s){super(e,s,x),this.color="black",this.pieceMovements=new y}}var v;v=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("GyZkq");var w;w=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("bWWKl");class P{findAccessibleCells(e){const s=e.coords.x,t=e.coords.y;this.accessible_cells=[...o(s,t,"up_left"),...o(s,t,"up_right"),...o(s,t,"down_left"),...o(s,t,"down_right")]}clear(){this.accessible_cells=[]}constructor(){this.accessible_cells=[]}}class C extends a{constructor(e,s){super(e,s,v),this.color="white",this.pieceMovements=new P}}class k extends a{constructor(e,s){super(e,s,w),this.color="black",this.pieceMovements=new P}}var E;E=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("ceTcT");var A;A=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("e7UnK");class M{findAccessibleCells(e){const s=e.coords.x,t=e.coords.y;this.accessible_cells=[...o(s,t,"left"),...o(s,t,"right"),...o(s,t,"up"),...o(s,t,"down"),...o(s,t,"up_left"),...o(s,t,"up_right"),...o(s,t,"down_left"),...o(s,t,"down_right")]}clear(){this.accessible_cells=[]}constructor(){this.accessible_cells=[]}}class R extends a{constructor(e,s){super(e,s,E),this.color="white",this.pieceMovements=new M}}class X extends a{constructor(e,s){super(e,s,A),this.color="black",this.pieceMovements=new M}}var H;H=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("1V5jw");var S;S=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("7EsJv");class L{findAccessibleCells(e){const s=e.coords.x,t=e.coords.y;this.accessible_cells=[j.getCell({x:s,y:t+1}),j.getCell({x:s,y:t-1}),j.getCell({x:s-1,y:t}),j.getCell({x:s+1,y:t}),j.getCell({x:s+1,y:t+1}),j.getCell({x:s-1,y:t-1}),j.getCell({x:s-1,y:t+1}),j.getCell({x:s+1,y:t-1})].filter((s=>{if(!s)return!1;const t=K.getPiece({x:s.x,y:s.y});return!(s.isOccupied()&&t&&!t.isEnemy(e))}))}clear(){this.accessible_cells=[]}constructor(){this.accessible_cells=[],this.is_checked=!1}}class O extends a{constructor(e,s){super(e,s,H),this.color="white",this.pieceMovements=new L}}class q extends a{constructor(e,s){super(e,s,S),this.color="black",this.pieceMovements=new L}}var F;F=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("lyTiA");var N;N=i("kPq84").getBundleURL("d3X8m")+i("bXuNP").resolve("cc5xi");class U{constructor(e){this.color=e,this.accessible_cells=[],this.made_move=!1,this.color=e}findAccessibleCells(e){const s=e.coords.x,t=e.coords.y;"white"===this.color?(this.made_move||this.accessible_cells.push(j.getCell({x:s,y:t-2})),this.accessible_cells.push(j.getCell({x:s,y:t-1})),this.accessible_cells=[...this.accessible_cells.filter((e=>!!e&&!e.isOccupied())),...this.getEnemyCellsForWhite(s,t)]):(this.made_move||this.accessible_cells.push(j.getCell({x:s,y:t+2})),this.accessible_cells.push(j.getCell({x:s,y:t+1})),this.accessible_cells=[...this.accessible_cells.filter((e=>!!e&&!e.isOccupied())),...this.getEnemyCellsForBlack(s,t)])}clear(){this.accessible_cells=[]}setMadeMove(){this.made_move=!0}getEnemyCellsForWhite(e,s){const t=K.getPiece({x:e,y:s});return[K.getPiece({x:e-1,y:s-1}),K.getPiece({x:e+1,y:s-1})].filter((e=>!!e&&!!e.isEnemy(t))).map((e=>j.getCell({x:e.coords.x,y:e.coords.y})))}getEnemyCellsForBlack(e,s){const t=K.getPiece({x:e,y:s});return[K.getPiece({x:e-1,y:s+1}),K.getPiece({x:e+1,y:s+1})].filter((e=>!!e&&!!e.isEnemy(t))).map((e=>j.getCell({x:e.coords.x,y:e.coords.y})))}}class B extends a{constructor(e,s){super(e,s,F),this.color="white",this.pieceMovements=new U("white")}move(e,s){this.isCellAccessible(e,s)?(this.updateCoords(e,s),this.remove(),this.append(),this.pieceMovements.setMadeMove()):this.unselect()}}class $ extends a{constructor(e,s){super(e,s,N),this.color="black",this.pieceMovements=new U("black")}move(e,s){this.isCellAccessible(e,s)?(this.updateCoords(e,s),this.remove(),this.append(),this.pieceMovements.setMadeMove()):this.unselect()}}class T{removePiece(e){this.pieces=this.pieces.filter((s=>s.coords.x!==e.coords.x||s.coords.y!==e.coords.y)),this.addToEaten(e)}addToEaten(e){this.eaten_pieces.push(e)}getSelectedPiece(){return this.selected_piece}setSelectedPiece(e){this.selected_piece=e}getPiece(e){return this.pieces.find((s=>s.coords.x===e.x&&s.coords.y===e.y))}addPiece(e){this.pieces.push(e)}static createPieceList(){let e=new T;e.addPiece(new g(6,7)),e.addPiece(new g(1,7)),e.addPiece(new _(7,7)),e.addPiece(new _(0,7)),e.addPiece(new C(2,7)),e.addPiece(new C(5,7)),e.addPiece(new R(3,7)),e.addPiece(new O(4,7));for(let s=0;s<8;s++)e.addPiece(new B(s,6));e.addPiece(new b(6,0)),e.addPiece(new b(1,0)),e.addPiece(new m(7,0)),e.addPiece(new m(0,0)),e.addPiece(new k(2,0)),e.addPiece(new k(5,0)),e.addPiece(new X(3,0)),e.addPiece(new q(4,0));for(let s=0;s<8;s++)e.addPiece(new $(s,1));return e}constructor(){this.pieces=[],this.eaten_pieces=[]}}l.render();const j=d.createCellList(),K=T.createPieceList();function W(){const e=K.getSelectedPiece();e&&e.unselect()}r("#field").addEventListener("click",(e=>{const s=e.target;if("IMG"==s.tagName){const e=+s.getAttribute("x"),t=+s.getAttribute("y"),c=K.getPiece({x:e,y:t});if(c){const s=K.getSelectedPiece();s?s.isEnemy(c)?s.attackAt(e,t):(W(),c.select()):c.select()}}else{const e=+s.getAttribute("x"),t=+s.getAttribute("y"),c=K.getSelectedPiece();c&&(c.move(e,t),W())}})),document.addEventListener("click",(e=>{const s=e.target;"DIV"!=s.tagName&&"IMG"!=s.tagName&&W()}));
//# sourceMappingURL=index.dbcfe3d9.js.map
