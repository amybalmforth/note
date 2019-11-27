(function(exports) {
  function testReturnString() {

    var noteview = new Noteview(notelist = new Notelist);
    var note = new Note('hey');
    var note2 = new Note('hi');
    notelist.createStore(note);
    notelist.createStore(note2);

    evaltrue.isTrue(noteview.returnString() === 'hey');

  };

  testReturnString();

})(this);
