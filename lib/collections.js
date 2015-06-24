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
// split the paragraphs
var words = paragraph.split(/\s+/);

// getting rid of punctuation
for (var i = 0; i < words.length; i++) {
  normalizedWords[i] = words[i].replace(/[^\w']+/, '');
}
// make everything lower case
for (var i = 0; i < normalizedWords.length; i++) {
  normalizedWords[i] = normalizedWords[i].toLowerCase();
}
/* your code ends here */

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};
for (var i = 0; i < normalizedWords.length; i++) {
  uniqueWordsAsKeys[normalizedWords[i]] = 1;
}
// The keys pulled out into a list
var uniqueWords = [];

/* your code starts here */
var i = 0;
for (var k in uniqueWordsAsKeys) {
  uniqueWords[i] = k;
  i++;
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

// declare longest, shortest, current longest and shortest word tp keep track of results.
var longest = 0, shortest = 100;
var currentLongest = '';
var currentShortest = '';
for (var i = 0; i < uniqueWords.length; i++) {
  // find the longest word by comparing the current longest to the next element
  if (uniqueWords[i].length > longest) {
    currentLongest = uniqueWords[i];
    longest = uniqueWords[i].length;
    console.log("current longest word: " + currentLongest);
  }
  // find the shortest work by comparing the current shortest to the next element
  if (uniqueWords[i].length < shortest) {
    currentShortest = uniqueWords[i];
    shortest = uniqueWords[i].length;
    console.log("current shortest word: " + currentShortest);
  }
}

// store the words into the dictionary
longAndShort['longest'] = currentLongest;
longAndShort['shortest'] = currentShortest;

/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
