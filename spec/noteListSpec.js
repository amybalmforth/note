(function(exports) {
  function testListNotes() {
    var notelist = new Notelist();

    evaltrue.isTrue(notelist.returnNoteList() === notelist.noteArray);

  };

  testListNotes();

})(this);
