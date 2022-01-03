const readlineSync = require('readline-sync');
let lines = [];
let currentLineIndex = 0;

function _resetInputLines() {
  if (process.env.INPUT_LINES) {
    lines = process.env.INPUT_LINES.split('\n');
    currentLineIndex = 0;
  }
}

_resetInputLines();

function nextLine() {
  if ((currentLineIndex + 1) > lines.length) {
    if (!process.stdin.isTTY) {
      throw new Error("no more lines to read");
    }
    return readlineSync.prompt();
  }
  return lines[currentLineIndex++];
}

module.exports = {
  nextLine,
  _resetInputLines
}