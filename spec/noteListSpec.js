(function(exports) {
  function testReturnList() {
    var notelist = new Notelist();

    evaltrue.isTrue(notelist.returnNoteList() === notelist.noteArray);

  };

  testReturnList();

  function testCreateStore() {
    var notelist = new Notelist();
    var note = new Note('hey');
    var note2 = new Note('hi');
    notelist.createStore(note);
    notelist.createStore(note2);

    evaltrue.isTrue(notelist.returnNoteList()[0] === 'hey');
    evaltrue.isTrue(notelist.returnNoteList()[1] === 'hi');

  };

  testCreateStore();

})(this);
