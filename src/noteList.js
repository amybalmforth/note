(function(exports) {
  function Notelist() {
    this.noteArray = [];
  };
  Notelist.prototype.returnNoteList = function() {
    return this.noteArray;
  }
  Notelist.prototype.createStore = function(noteText) {
    this.noteArray.push(noteText.text);
  }

  exports.Notelist = Notelist;
})(this);
