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

normalizedWords = paragraph.toLowerCase().replace(/[^\w']+/g, " ").split(/\s+/);

console.log(normalizedWords);

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

for (var i = 0; i < normalizedWords.length; i++) {
  var specialWords = normalizedWords[i];
  uniqueWordsAsKeys[specialWords] = true;
}

console.log(uniqueWordsAsKeys);

// The keys pulled out into a list
var uniqueWords = [];

var j = 0;

for (var key in uniqueWordsAsKeys) {
  uniqueWords[j++] = key;
}

console.log(uniqueWords);

// Question 3
// write code to determine the longest and shortest words in the
//   uniqueWords array
// use a dictionary to store the words with keys

// The longest and shortest word in the paragraph
var longAndShort = {};

//jscs:disable requireDotNotation
longAndShort['longest'] = '';
longAndShort['shortest'] = paragraph;

for (i = 0; i < normalizedWords.length; i++) {
  var words = normalizedWords[i];
  longAndShort[words] = words.length;

} // words with keys and their length

var longest = 0;
var shortest = 0;
var wordLength = normalizedWords;
var k = 0;

for (var j = 0; j < wordLength.length; j++) {
if (longest < wordLength[j].length) {
    longest = wordLength[j];
    console.log("longest word")
  } else {
    shortest = wordLength[k];
    console.log("shortest word")
  }
}

console.log(longest)

console.log(longAndShort);

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
