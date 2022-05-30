// words to guess
var firstWord = ['apple'];
var secondWord = ['banana'];
var thirdWord = ['grape'];

// array containing all words
var masterList = [firstWord, secondWord, thirdWord];

// randomly choose var from master
function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

// change word to underscores
function underScored {

}