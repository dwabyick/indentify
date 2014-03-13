/**
 This simple function expects a block of well-formed HTML, separated by newlines,
 where the indentations are inconsistent.  It simply keeps track of whether a given
 line should be indented or outdented, and adjusts appropriately. It assumes
 that the lines should start and end indented.
 */
module.exports = function(html, indent) {
  indent = indent !== undefined ? indent : 4;

  var lines = html.split("\n");
  var curLine;

  var curLineSpaces = 0;
  var lastLineSpaces = -1;
  var indentLevel = -1;

  for (var i=0; i<lines.length; i++ ) {

    curLine = lines[i];
    curLineSpaces =  curLine.search(/[^\s]/);
    if (curLineSpaces > lastLineSpaces) {
      indentLevel++;
    }
    else if (curLineSpaces < lastLineSpaces) {
      indentLevel--;
    }
    lines[i] = curLine.replace(/^\s*/, spaces(indentLevel*indent));
    lastLineSpaces = curLineSpaces;
  }
  console.log(lines);

  return lines.join("\n");
}

function spaces(len) {
  var str = "";
  for (var i=0;i<len; i++) {
    str += " ";
  }
  return str;
}