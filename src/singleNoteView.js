(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  };
  SingleNoteView.prototype.returnThisNote = function() {
    return "<div>" + note.returnNote() + "</div>";
  };



  exports.SingleNoteView = SingleNoteView;
})(this);
