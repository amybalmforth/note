(function(exports) {
  function testReturnsNote() {
    var note = new Note("test text");

    evaltrue.isTrue(note.returnNote() === "test text");
  };

  testReturnsNote();

})(this);
