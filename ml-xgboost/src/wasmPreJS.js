const path = require('path');

var Module = module.exports = {};
if (typeof self === 'undefined') {
// When loaded with nodejs, the absolute file path is needed
  // Module.wasmBinaryFile = path.resolve(__dirname, 'xgboost.wasm');
  Module.wasmBinaryFile = chrome.runtime.getURL('xgboost.wasm');
} else {
  // Module.wasmBinaryFile = 'xgboost.wasm';
  Module.wasmBinaryFile = chrome.runtime.getURL('xgboost.wasm');
}

Module.isReady = new Promise(function (resolve) {
  Module.onRuntimeInitialized = function () {
    resolve(Module);
  };
});
