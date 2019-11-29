(function(exports) {

  function testSingleNoteViewDiv() {

    var single = new SingleNoteView(note = new Note("Hey"));

    compare.equal(single.returnThisNote(), "<div>Hey</div>")

  };

  testSingleNoteViewDiv();

})(this);
