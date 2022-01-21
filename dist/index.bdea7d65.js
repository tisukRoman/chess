// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hMwtF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cellList", ()=>cellList
);
parcelHelpers.export(exports, "pieceList", ()=>pieceList
);
var _game = require("./Game");
var _cellList = require("./cells/CellList");
var _pieceList = require("./pieces/PieceList");
var _utils = require("./utils");
_game.game.render();
const cellList = _cellList.CellList.createCellList();
const pieceList = _pieceList.PieceList.createPieceList();
_utils.$('#field').addEventListener('click', (event)=>{
    const target = event.target;
    if (target.tagName == 'IMG') {
        clearSelectedPiece();
        const x = +target.getAttribute('x');
        const y = +target.getAttribute('y');
        const piece = pieceList.getPiece({
            x,
            y
        });
        if (piece) piece.select();
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
function clearSelectedPiece() {
    const selectedPiece = pieceList.getSelectedPiece();
    if (selectedPiece) selectedPiece.unselect();
}

},{"./utils":"jxYDB","./Game":"fJoK3","./cells/CellList":"kWUza","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./pieces/PieceList":"7sTMk"}],"jxYDB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$
);
parcelHelpers.export(exports, "$$", ()=>$$
);
parcelHelpers.export(exports, "$$$", ()=>$$$
);
const $ = (query)=>document.querySelector(query)
;
const $$ = (query)=>[
        ...document.querySelectorAll(query)
    ]
;
const $$$ = (element, query)=>element.querySelector(query)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fJoK3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "game", ()=>game
);
class Game {
    render() {
        const board = document.getElementById('field');
        for(let i = 0; i < 8; i++)for(let j = 0; j < 8; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if ((i + j) % 2 === 0) cell.classList.add('white');
            else cell.classList.add('black');
            cell.setAttribute('x', `${j}`);
            cell.setAttribute('y', `${i}`);
            board.append(cell);
        }
    }
}
const game = new Game();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kWUza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CellList", ()=>CellList
);
var _utils = require("../utils");
var _cell = require("./Cell");
class CellList {
    addCell(cell) {
        this.cells.push(cell);
    }
    getCell(coords) {
        return this.cells.find((c)=>c.x === coords.x && c.y === coords.y
        );
    }
    static createCellList() {
        let cellList = new CellList();
        for(let i = 0; i < 8; i++)for(let j = 0; j < 8; j++)cellList.addCell(new _cell.Cell(i, j, _utils.$(`div[x="${i}"][y="${j}"]`)));
        return cellList;
    }
    constructor(){
        this.cells = [];
    }
}

},{"./Cell":"k3yZy","../utils":"jxYDB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k3yZy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cell", ()=>Cell
);
var _utils = require("../utils");
class Cell {
    constructor(x, y, element = null, is_focused = false){
        this.x = x;
        this.y = y;
        this.element = element;
        this.is_focused = is_focused;
    }
    setFocused() {
        this.is_focused = true;
        const cellElem = _utils.$(`div[x="${this.x}"][y="${this.y}"]`);
        if (cellElem) cellElem.classList.add('focus');
    }
    setUnfocused() {
        this.is_focused = false;
        const cellElem = _utils.$(`div[x="${this.x}"][y="${this.y}"]`);
        if (cellElem) cellElem.classList.remove('focus');
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../utils":"jxYDB"}],"7sTMk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PieceList", ()=>PieceList
);
var _knight = require("./Knight");
var _rook = require("./Rook");
var _bishop = require("./Bishop");
var _queen = require("./Queen");
var _king = require("./King");
var _pawn = require("./Pawn");
class PieceList {
    getSelectedPiece() {
        return this.selected_piece;
    }
    setSelectedPiece(piece) {
        this.selected_piece = piece;
    }
    addPiece(piece) {
        this.pieces.push(piece);
    }
    getPiece(coords) {
        return this.pieces.find((p)=>p.coords.x === coords.x && p.coords.y === coords.y
        );
    }
    static createPieceList() {
        let pieceList = new PieceList();
        pieceList.addPiece(new _knight.WhiteKnight(6, 7));
        pieceList.addPiece(new _knight.WhiteKnight(1, 7));
        pieceList.addPiece(new _rook.WhiteRook(7, 7));
        pieceList.addPiece(new _rook.WhiteRook(0, 7));
        pieceList.addPiece(new _bishop.WhiteBishop(2, 7));
        pieceList.addPiece(new _bishop.WhiteBishop(5, 7));
        pieceList.addPiece(new _queen.WhiteQueen(3, 7));
        pieceList.addPiece(new _king.WhiteKing(4, 7));
        for(let i = 0; i < 8; i++)pieceList.addPiece(new _pawn.WhitePawn(i, 6));
        pieceList.addPiece(new _knight.BlackKnight(6, 0));
        pieceList.addPiece(new _knight.BlackKnight(1, 0));
        pieceList.addPiece(new _rook.BlackRook(7, 0));
        pieceList.addPiece(new _rook.BlackRook(0, 0));
        pieceList.addPiece(new _bishop.BlackBishop(2, 0));
        pieceList.addPiece(new _bishop.BlackBishop(5, 0));
        pieceList.addPiece(new _queen.BlackQueen(3, 0));
        pieceList.addPiece(new _king.BlackKing(4, 0));
        for(let i1 = 0; i1 < 8; i1++)pieceList.addPiece(new _pawn.BlackPawn(i1, 1));
        return pieceList;
    }
    constructor(){
        this.pieces = [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./Knight":"bX1kp","./Rook":"bBfE2","./Bishop":"d36nD","./Queen":"8nTkI","./King":"6Vy0l","./Pawn":"fNPBR"}],"bX1kp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WhiteKnight", ()=>WhiteKnight
);
parcelHelpers.export(exports, "BlackKnight", ()=>BlackKnight
);
var _piece = require("./Piece");
var _index = require("../index");
const white_knight_src = require('../images/white_knight.png');
const black_knight_src = require('../images/black_knight.png');
class KnightMovements {
    findAccessibleCells(piece) {
        const x = piece.coords.x;
        const y = piece.coords.y;
        this.accessible_cells = [
            _index.cellList.getCell({
                x: x - 1,
                y: y - 2
            }),
            _index.cellList.getCell({
                x: x + 1,
                y: y - 2
            }),
            _index.cellList.getCell({
                x: x - 2,
                y: y - 1
            }),
            _index.cellList.getCell({
                x: x + 2,
                y: y - 1
            }),
            _index.cellList.getCell({
                x: x - 1,
                y: y + 2
            }),
            _index.cellList.getCell({
                x: x + 1,
                y: y + 2
            }),
            _index.cellList.getCell({
                x: x - 2,
                y: y + 1
            }),
            _index.cellList.getCell({
                x: x + 2,
                y: y + 1
            }), 
        ].filter((cell)=>cell
        );
    }
    clear() {
        this.accessible_cells = [];
    }
    constructor(){
        this.accessible_cells = [];
    }
}
class WhiteKnight extends _piece.Piece {
    constructor(x, y){
        super(x, y, white_knight_src);
        this.pieceMovements = new KnightMovements();
    }
}
class BlackKnight extends _piece.Piece {
    constructor(x, y){
        super(x, y, black_knight_src);
        this.pieceMovements = new KnightMovements();
    }
}

},{"./Piece":"VP4kA","../index":"7PGg5","../images/white_knight.png":"iO7nL","../images/black_knight.png":"bbQFs","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"VP4kA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Piece", ()=>Piece
);
var _index = require("../index");
class Piece {
    constructor(x, y, src){
        this.isSelected = false;
        this.coords = {
            x: x,
            y: y
        };
        this.src = src;
        this.append();
    }
    select() {
        if (this.isSelected) this.unselect();
        else {
            this.focusCells();
            this.isSelected = true;
            _index.pieceList.setSelectedPiece(this);
        }
    }
    unselect() {
        this.unfocusCells();
        this.isSelected = false;
        _index.pieceList.setSelectedPiece(null);
    }
    focusCells() {
        this.pieceMovements.findAccessibleCells(this);
        this.pieceMovements.accessible_cells.forEach((cell)=>{
            cell.setFocused();
        });
    }
    unfocusCells() {
        this.pieceMovements.accessible_cells.forEach((cell)=>{
            cell.setUnfocused();
        });
        this.pieceMovements.clear();
    }
    move(x, y) {
        if (this.isCellAccessible(x, y)) {
            this.updateCoords(x, y);
            this.remove();
            this.append();
        } else this.unselect();
    }
    isCellAccessible(x, y) {
        return this.pieceMovements.accessible_cells.some((cell)=>{
            return cell.x === x && cell.y === y;
        });
    }
    updateCoords(x, y) {
        this.coords = {
            x: x,
            y: y
        };
    }
    remove() {
        this.element.remove();
    }
    append() {
        this.element = document.createElement('img');
        this.element.src = this.src;
        this.element.setAttribute('x', `${this.coords.x}`);
        this.element.setAttribute('y', `${this.coords.y}`);
        this.current_cell = _index.cellList.getCell({
            x: this.coords.x,
            y: this.coords.y
        });
        this.current_cell.element.append(this.element);
    }
}

},{"../index":"7PGg5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iO7nL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "white_knight.0f6a8866.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bbQFs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "black_knight.c33eb336.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bBfE2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WhiteRook", ()=>WhiteRook
);
parcelHelpers.export(exports, "BlackRook", ()=>BlackRook
);
var _ = require("..");
var _piece = require("./Piece");
const white_rook_src = require('../images/white_rook.png');
const black_rook_src = require('../images/black_rook.png');
class RookMovements {
    findAccessibleCells(piece) {
        const x = piece.coords.x;
        const y = piece.coords.y;
        for(let i = 0; i < 8; i++){
            this.accessible_cells.push(_.cellList.getCell({
                x: x,
                y: y - i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x,
                y: y + i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x - i,
                y: y
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x + i,
                y: y
            }));
        }
        this.accessible_cells = this.accessible_cells.filter((cell)=>cell
        );
    }
    clear() {
        this.accessible_cells = [];
    }
    constructor(){
        this.accessible_cells = [];
    }
}
class WhiteRook extends _piece.Piece {
    constructor(x, y){
        super(x, y, white_rook_src);
        this.pieceMovements = new RookMovements();
    }
}
class BlackRook extends _piece.Piece {
    constructor(x, y){
        super(x, y, black_rook_src);
        this.pieceMovements = new RookMovements();
    }
}

},{"..":"7PGg5","./Piece":"VP4kA","../images/white_rook.png":"6MPKy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../images/black_rook.png":"lSKpb"}],"6MPKy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "white_rook.025d5693.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lSKpb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "black_rook.369762d6.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"d36nD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WhiteBishop", ()=>WhiteBishop
);
parcelHelpers.export(exports, "BlackBishop", ()=>BlackBishop
);
var _ = require("..");
var _piece = require("./Piece");
const white_bishop_src = require('../images/white_bishop.png');
const black_bishop_src = require('../images/black_bishop.png');
class BishopMovements {
    findAccessibleCells(piece) {
        const x = piece.coords.x;
        const y = piece.coords.y;
        for(let i = 0; i < 8; i++){
            this.accessible_cells.push(_.cellList.getCell({
                x: x + i,
                y: y + i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x - i,
                y: y + i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x - i,
                y: y - i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x + i,
                y: y - i
            }));
        }
        this.accessible_cells = this.accessible_cells.filter((cell)=>cell
        );
    }
    clear() {
        this.accessible_cells = [];
    }
    constructor(){
        this.accessible_cells = [];
    }
}
class WhiteBishop extends _piece.Piece {
    constructor(x, y){
        super(x, y, white_bishop_src);
        this.pieceMovements = new BishopMovements();
    }
}
class BlackBishop extends _piece.Piece {
    constructor(x, y){
        super(x, y, black_bishop_src);
        this.pieceMovements = new BishopMovements();
    }
}

},{"..":"7PGg5","./Piece":"VP4kA","../images/white_bishop.png":"2NDBi","../images/black_bishop.png":"donC5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2NDBi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "white_bishop.ab738f23.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"donC5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "black_bishop.2dceb030.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8nTkI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WhiteQueen", ()=>WhiteQueen
);
parcelHelpers.export(exports, "BlackQueen", ()=>BlackQueen
);
var _ = require("..");
var _piece = require("./Piece");
const white_queen_src = require('../images/white_queen.png');
const black_queen_src = require('../images/black_queen.png');
class QueenMovements {
    findAccessibleCells(piece) {
        const x = piece.coords.x;
        const y = piece.coords.y;
        for(let i = 0; i < 8; i++){
            this.accessible_cells.push(_.cellList.getCell({
                x: x,
                y: y - i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x,
                y: y + i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x - i,
                y: y
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x + i,
                y: y
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x + i,
                y: y + i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x - i,
                y: y + i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x - i,
                y: y - i
            }));
            this.accessible_cells.push(_.cellList.getCell({
                x: x + i,
                y: y - i
            }));
        }
        this.accessible_cells = this.accessible_cells.filter((cell)=>cell
        );
    }
    clear() {
        this.accessible_cells = [];
    }
    constructor(){
        this.accessible_cells = [];
    }
}
class WhiteQueen extends _piece.Piece {
    constructor(x, y){
        super(x, y, white_queen_src);
        this.pieceMovements = new QueenMovements();
    }
}
class BlackQueen extends _piece.Piece {
    constructor(x, y){
        super(x, y, black_queen_src);
        this.pieceMovements = new QueenMovements();
    }
}

},{"..":"7PGg5","./Piece":"VP4kA","../images/white_queen.png":"fyuLg","../images/black_queen.png":"9dcYt","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fyuLg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "white_queen.0330b44c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9dcYt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "black_queen.8bcab55e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6Vy0l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WhiteKing", ()=>WhiteKing
);
parcelHelpers.export(exports, "BlackKing", ()=>BlackKing
);
var _piece = require("./Piece");
var _index = require("../index");
const white_king_src = require('../images/white_king.png');
const black_king_src = require('../images/black_king.png');
class KingMovements {
    findAccessibleCells(piece) {
        const x = piece.coords.x;
        const y = piece.coords.y;
        this.accessible_cells = [
            _index.cellList.getCell({
                x: x + 1,
                y: y + 1
            }),
            _index.cellList.getCell({
                x: x - 1,
                y: y + 1
            }),
            _index.cellList.getCell({
                x: x - 1,
                y: y - 1
            }),
            _index.cellList.getCell({
                x: x + 1,
                y: y - 1
            }), 
        ].filter((cell)=>cell
        );
    }
    clear() {
        this.accessible_cells = [];
    }
    constructor(){
        this.accessible_cells = [];
    }
}
class WhiteKing extends _piece.Piece {
    constructor(x, y){
        super(x, y, white_king_src);
        this.pieceMovements = new KingMovements();
    }
}
class BlackKing extends _piece.Piece {
    constructor(x, y){
        super(x, y, black_king_src);
        this.pieceMovements = new KingMovements();
    }
}

},{"./Piece":"VP4kA","../index":"7PGg5","../images/white_king.png":"LpXL1","../images/black_king.png":"jFyh4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"LpXL1":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "white_king.47ece755.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jFyh4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "black_king.1a308d36.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fNPBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WhitePawn", ()=>WhitePawn
);
parcelHelpers.export(exports, "BlackPawn", ()=>BlackPawn
);
var _piece = require("./Piece");
var _index = require("../index");
const white_pawn_src = require('../images/white_pawn.png');
const black_pawn_src = require('../images/black_pawn.png');
class PawnMovements {
    constructor(color){
        this.color = color;
        this.accessible_cells = [];
        this.madeMove = false;
        this.color = color;
    }
    findAccessibleCells(piece) {
        const x = piece.coords.x;
        const y = piece.coords.y;
        if (this.color === 'white') {
            if (!this.madeMove) {
                this.accessible_cells.push(_index.cellList.getCell({
                    x: x,
                    y: y - 2
                }));
                this.madeMove = true;
            }
            this.accessible_cells.push(_index.cellList.getCell({
                x: x,
                y: y - 1
            }));
            this.accessible_cells = this.accessible_cells.filter((cell)=>cell
            );
        } else {
            if (!this.madeMove) {
                this.accessible_cells.push(_index.cellList.getCell({
                    x: x,
                    y: y + 2
                }));
                this.madeMove = true;
            }
            this.accessible_cells.push(_index.cellList.getCell({
                x: x,
                y: y + 1
            }));
            this.accessible_cells = this.accessible_cells.filter((cell)=>cell
            );
        }
    }
    clear() {
        this.accessible_cells = [];
    }
}
class WhitePawn extends _piece.Piece {
    constructor(x, y){
        super(x, y, white_pawn_src);
        this.pieceMovements = new PawnMovements('white');
    }
}
class BlackPawn extends _piece.Piece {
    constructor(x, y){
        super(x, y, black_pawn_src);
        this.pieceMovements = new PawnMovements('black');
    }
}

},{"./Piece":"VP4kA","../index":"7PGg5","../images/white_pawn.png":"8j30g","../images/black_pawn.png":"1QXpn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8j30g":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "white_pawn.28fde85e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"1QXpn":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "black_pawn.d6bfd720.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}]},["hMwtF","7PGg5"], "7PGg5", "parcelRequire94c2")

//# sourceMappingURL=index.bdea7d65.js.map
