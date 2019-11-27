(function(exports) {
  function Noteview(notelist) {
    this.notelist = notelist;
  };
  Noteview.prototype.returnString = function() {
    return notelist.noteArray[0];
  };

  exports.Noteview = Noteview;
})(this);

var note = new Note("hi");
var notelist = new Notelist;
var noteview = new Noteview;
notelist.createStore(note);
