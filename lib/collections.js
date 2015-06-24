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
normalizedWords = paragraph.split(' ');

normalizedWords = normalizedWords.map(function(word) {
  return word.replace(/[^\w']+/, '').toLowerCase();
});
/* your code ends here */

// Question 2
// write code to store the elements from the words array as keys
// in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

// The keys pulled out into a list
var uniqueWords =[];

/* your code starts here */
for (var i = 0; i < normalizedWords.length; i++) {
  uniqueWordsAsKeys[normalizedWords[i]] = true;
}

uniqueWords = Object.keys(uniqueWordsAsKeys);
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
var shortestWord = uniqueWords[0];
var longestWord = uniqueWords[0];

for (var i = 0; i < uniqueWords.length; i++) {
  if (shortestWord.length < uniqueWords[i].length) {
    shortestWord = uniqueWords[i];
  }
}

for (var i = 0; i < uniqueWords.length; i++) {
  if (longestWord.length > uniqueWords[i].length) {
    longestWord = uniqueWords[i];
  }
}

console.log(shortestWord);
console.log(longestWord);

longAndShort['longest'] = longestWord;
longAndShort['shortest'] = shortestWord;


// var wordLength = uniqueWords[0].length;

// var shortest;
// shortest = uniqueWords.map(function(word) {
//   console.log(word)
//   if (word.length < wordLength) {
//     //console.log(word);
//     shortestWord = word;
//     wordLength = word.length;
//   }
//   return shortestWord;
// });

// longAndShort['longest'] = shortest;

// wordLength = uniqueWords[0].length;

// var longestWord = uniqueWords[0];
// var longest = uniqueWords.map(function(word){
//   if (word.length > wordLength) {
//     longestWord = word;
//     wordLength = word.length;
//   }
//   return longestWord;
// });

//longAndShort['shortest'] = longest;

//console.log(longAndShort);
/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
