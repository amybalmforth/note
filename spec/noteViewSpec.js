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

    compare.equal(noteview.returnString(), '<ul></ul>');

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

  function testReturnShortString() {

    var noteview = new Noteview(notelist = new Notelist);
    var note1 = new Note('je suis en cours de prendre le train pour aller voir ma famille')
    notelist.createStore(note1);

    compare.equal(noteview.returnString(), '<ul><li><div>je suis en cours de </div></li></ul>')

  }

  testReturnShortString();

})(this);
