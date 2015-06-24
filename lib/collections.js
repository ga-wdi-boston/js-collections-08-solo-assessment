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

var words = paragraph.split(/\s+/);

for (var i = 0; i < words.length; i++) {
  normalizedWords[i] = words[i].toLowerCase().replace(/[^\w']+/, '');
}
//console.log(normalizedWords);

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
  //if (sorted_words[i] !== sorted_words[i + 1]) {
  uniqueWordsAsKeys[normalizedWords[i]] = true;
}

//console.log(uniqueWordsAsKeys);

var i = 0;
for (var word in uniqueWordsAsKeys) {
  uniqueWords[i] = word;
  i++;
}

//for (var i = 0; i < uniqueWordsAsKeys.length; i++) {
//  for (var word in uniqueWordsAsKeys) {
//    uniqueWords[i] = uniqueWordsAsKeys[word];
//  }
//}

console.log(uniqueWords);
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

// Look at the uniqueWords array. Find the longest word and store that word as the value of the 'longest' key. Find the shortest word and store that word as the value of the 'shortest' key.
//
/* your code starts here */

// ATTEMPT #1 (doesn't work):
 var length = 0;
 var sortedWords = uniqueWords.sort();

for (var i = 0; i < sortedWords.length; i++) {
  length = sortedWords[i].length;
  if ((length - 1) === false) {
    longAndShort['shortest'] = sortedWords[i];
  } else if ((length + 1) === false) {
    longAndShort['longest'] = sortedWords[i];
  }
  // Shortest word: if there is no word with a length shorter than it. So if length - 1 = falsey?
  // Longest word: if there is no word with a length longer than it. So if length + 1 = falsey.
}

console.log(longAndShort);

/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
