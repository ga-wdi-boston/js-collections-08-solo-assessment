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
normalizedWords = paragraph.split(/\s+/);
for (var i = 0; i < normalizedWords.length; i++) {
  normalizedWords[i] = normalizedWords[i].replace(/[^\w']+/, '').toLowerCase();
}
/* your code ends here */

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};
for (i = 0; i < normalizedWords.length; i++) {
  // Replaces key if already exists, so no duplicates
  uniqueWordsAsKeys[normalizedWords[i]] = true;
}

// The keys pulled out into a list

/* your code starts here */
var uniqueWords = [];
for (var uniqueWord in uniqueWordsAsKeys) {
  uniqueWords.push(uniqueWord);
}
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
var longest = 0;
var shortest = 189820; // longer than the longest word
for (i = 0; i < uniqueWords.length; i++) {

  // Check shortest
  if (uniqueWords[i].length < shortest) {
    shortest = uniqueWords[i].length;
    longAndShort['shortest'] = uniqueWords[i];
  }

  // Check longest
  if (uniqueWords[i].length > longest) {
    longest = uniqueWords[i].length;
    longAndShort['longest'] = uniqueWords[i];
  }
}
/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
