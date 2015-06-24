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
normalizedWords = paragraph.split(/\s+/);

/* your code starts here */
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

// The keys pulled out into a list
var uniqueWords = [];

/* your code starts here */
// Go throuth each word
for (var i = 0; i < normalizedWords.length; i++) {
  //For each word
  // if the word is in our object, set its value to "false"
  // otherwise add it and set to "true"
  if (uniqueWordsAsKeys[normalizedWords[i]] === undefined) {
    uniqueWordsAsKeys[normalizedWords[i]] = true;
  } else {
    uniqueWordsAsKeys[normalizedWords[i]] = false;
  }
}


for (var key in uniqueWordsAsKeys) {
    uniqueWords.push(key);
}
/* your code ends here */

// Question 3
// write code to determine the longest and shortest words in the
// uniqueWords array
// use a dictionary to store the words with keys

// The longest and shortest word in the paragraph
var longAndShort = {};

//jscs:disable requireDotNotation
longAndShort['longest'] = '';
longAndShort['shortest'] = paragraph;

/* your code starts here */
var longest = " ";
var shortest = " ";

//Going through the array of unique words to determine the longest and shortest. Variables carry out a duty of a buffer for storing the longest and shortest words.
for (var i = 1; i < uniqueWords.length; i++) {
  if (longest.length < uniqueWords[i].length) {
    longest = uniqueWords[i];
  }
  if (shortest.length >= uniqueWords[i].length) {
    shortest = uniqueWords[i];
  }
}

longAndShort.longest = longest;
longAndShort.shortest = shortest;

/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
