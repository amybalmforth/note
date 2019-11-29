(function(exports) {
  function testSingleNoteView() {

    var single = new SingleNoteView(note = new Note("Hey"));

    console.log(note);
    console.log(single.returnNote())

    compare.equal(single.returnNote(), note)




  };

  testSingleNoteView();

})(this);
