(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  };
  SingleNoteView.prototype.returnNote = function() {
    return this.note;
  };



  exports.SingleNoteView = SingleNoteView;
})(this);
