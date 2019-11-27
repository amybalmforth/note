(function(exports) {
  function testReturnString() {

    var noteview = new Noteview(notelist = new Notelist);
    var note = new Note('hey');
    notelist.createStore(note);

    evaltrue.isTrue(noteview.returnString() === '<ul><li><div>hey</div></li></ul>');

  };

  testReturnString();

  function testReturnEmptyString() {

    var noteview = new Noteview(notelist = new Notelist);

    evaltrue.isTrue(noteview.returnString() === '<ul></ul>');

  };

  testReturnEmptyString();

  function testReturnMultipleString() {

    var noteview = new Noteview(notelist = new Notelist);
    var note1 = new Note('hey');
    var note2 = new Note('yo');
    notelist.createStore(note1);
    notelist.createStore(note2);

    evaltrue.isTrue(noteview.returnString() === '<ul><li><div>hey</div></li><li><div>yo</div></li></ul>');

  };

  testReturnMultipleString();

})(this);
