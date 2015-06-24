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
var words = [];

words = paragraph.split(/\s+/);

// splits paragraph into array (words) of words

for (var i = 0; i < words.length; i++) {
  normalizedWords[i] = words[i].replace(/[^\w']+/, '').toLowerCase();

  // iterates through array (words) to create new array (normalizedWords)
  // with punctiation replaced with nothing, and all letters in lower case
}

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

for (var i = 0; i < normalizedWords.length; ++i) {
  var key = normalizedWords[i];
  if (uniqueWordsAsKeys[key] === undefined) {
    // if the word is not currently in object (uniqueWordsAsKeys),
    //create it and set value to true
    uniqueWordsAsKeys[key] = true;
  } else {
    // if the word is currently in our object (uniqueWordsAsKeys) and
    // its value is true, set its value to 'false'
    uniqueWordsAsKeys[key] = false;
  }
}

// The keys pulled out into a list
var uniqueWords = [];

var j = 0;
for (var key in uniqueWordsAsKeys) {
  uniqueWords.push(key);

  // for each key in object (uniqueWordsAsKeys) add that key
  // to the array uniqueWords
}

// Question 3
// write code to determine the longest and shortest words in the
//   uniqueWords array
// use a dictionary to store the words with keys

// The longest and shortest word in the paragraph
var longAndShort = {};

//jscs:disable requireDotNotation
longAndShort['longest'] = '';
// From the start, the first word will be longer than ''
longAndShort['shortest'] = paragraph;
// From the start, the first word will be shorter than paragraph

for (var i = 0; i < uniqueWords.length; i++) {
  // If the next word is longer than the longest word so far, it's
  //the new longest word
  if (uniqueWords[i].length > longAndShort['longest'].length ) {
    longAndShort['longest'] = uniqueWords[i];
  }
}

for (var i = 0; i < uniqueWords.length; i++) {
  // If the next word is shorter than the shortest word so far,
  //it's the new shortest word
  if (uniqueWords[i].length < longAndShort['shortest'].length) {
    longAndShort['shortest'] = uniqueWords[i];
  }
}

debugger; //breakpoint

console.log(longAndShort);

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
