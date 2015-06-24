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
normalizedWords = paragraph.toLowerCase().replace(/[,.]/g, '').split(/\s+/);
//console.log(normalizedWords);

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};
for (var i = 0; i < normalizedWords.length; i++) {
  uniqueWordsAsKeys[normalizedWords[i]] = true;
}
//console.log(uniqueWordsAsKeys);

// The keys pulled out into a list
var uniqueWords = [];
var i = 0;
for (var key in uniqueWordsAsKeys) {
  uniqueWords[i++] = key;
}
//console.log(uniqueWords);

// Question 3
// write code to determine the longest and shortest words in the
//   uniqueWords array
// use a dictionary to store the words with keys

// The longest and shortest word in the paragraph
var longAndShort = {};

//jscs:disable requireDotNotation
//longAndShort['longest'] = '';
//longAndShort['shortest'] = paragraph;

// 1. iterate through the array
// 2. for each element, use the length method to determine its length
// 3. store that key/value pair in the longAndShort associative array
// 4. Read through the hash, selecting the smallest and largest values

for (var i = 0; i < uniqueWords; i++) {
  longAndShort[i] = uniqueWords[i];
  longAndShort[uniqueWords[i]] = longAndShort[i].length;
}
console.log(longAndShort);

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
