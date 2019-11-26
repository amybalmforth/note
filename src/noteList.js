(function(exports) {
  function Notelist() {
    this.noteArray = [];
  };
  Notelist.prototype.returnNoteList = function() {
    return this.noteArray;

  }
  exports.Notelist = Notelist;
})(this);
