'use strict';

var paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';

// Question 1
// write code to split the above paragraph into an array of words
// then normalize the words in the array
var words = [];
words = paragraph.split(/\s+/);

//console.log(words)

// The word list normalized (all lower case with punctuation removed)


/* your code starts here */
var normalizedWords = [];
var i;
for (i = 0; i < words.length; i++) {
  var word = words[i];
  word = word.replace(/[^\w']+/, '').toLowerCase();
  normalizedWords[i] = word;
}
  //console.log(normalizedWords)
/* your code ends here */

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};
  for (i = 0; i < normalizedWords.length; i++) {
    var normWord = normalizedWords[i];
    uniqueWordsAsKeys[normWord] = true;
}
// The keys pulled out into a list

/* your code starts here */
var uniqueWords = [];
var j = 0;
for (var uniqueWord in uniqueWordsAsKeys) {
  uniqueWords[j] = uniqueWord;
  j +=1;
}
//console.log(uniqueWordsAsKeys)
/* your code ends here */

// Question 3
// write code to determine the longest and shortest words in the
//   uniqueWords array
// use a dictionary to store the words with keys

// The longest and shortest word in the paragraph
var longAndShort = {};

//jscs:disable requireDotNotation
longAndShort['longest'] = '';
longAndShort['shortest'] = paragraph;

/* your code starts here */

longuniqueWord[i].length;





/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
