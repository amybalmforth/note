(function(exports) {
  function Noteview(notelist) {
    this.notelist = notelist;

  };

  Noteview.prototype.returnString = function() {
    var start = '<ul>';
    var middle = '';
    var end = '</ul>';
    for (var i = 0, l = notelist.noteArray.length; i < l; i++) {
        middle += '<li><div>' + notelist.noteArray[i] + '</div></li>';
        //console.log(middle);
    };
    return start + middle + end;
  };


  exports.Noteview = Noteview;
})(this);


// var noteview = new Noteview(notelist = new Notelist);
// var note1 = new Note("hey");
// var note2 = new Note("hi");
// notelist.createStore(note1);
// notelist.createStore(note2);
