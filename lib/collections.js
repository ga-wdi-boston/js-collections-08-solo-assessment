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

// The word list normalized (all lower case with punctuation removed)
var normalizedWords = [];

/* your code starts here */
normalizedWords = paragraph.split(/\s+/).map(function(s) {
  return s.replace(/[^\w']+/, "").toLowerCase();
}).sort();
// console.log(normalizedWords);
/* your code ends here */

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

// The keys pulled out into a list
var uniqueWords = [];

/* your code starts here */
for (var i = 0; i < normalizedWords.length; i++) {
  if (uniqueWordsAsKeys[normalizedWords[i]] === undefined) {
    uniqueWordsAsKeys[normalizedWords[i]] = true;
  }
  else {
    uniqueWordsAsKeys[normalizedWords[i]] = false;
  }
}
// console.log(uniqueWordsAsKeys);

for (var k in uniqueWordsAsKeys) {
  uniqueWords.push(k);
}
// console.log(uniqueWords);
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
for (var i = 0; i < uniqueWords.length; i++) {
  if (uniqueWords[i].length > longAndShort['longest'].length) {
    longAndShort['longest'] = uniqueWords[i];
  }

  if (uniqueWords[i].length < longAndShort['shortest'].length) {
    longAndShort['shortest'] = uniqueWords[i];
  }
}
// console.log(longAndShort);
/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
