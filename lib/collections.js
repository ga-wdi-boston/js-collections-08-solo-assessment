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

for (var i = 0; i < normalizedWords.length; i++) {
  normalizedWords[i] = normalizedWords[i].replace(/[^\w']+/, '').toLowerCase();
}

/* OR */
/*
normalizedWords = normalizedWords.map(function(word) {
  return word.replace(/[^\w']+/, "");
});
*/

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
// Go through each word, one at a time
for (var i = 0; i < normalizedWords.length; i++) {
  //For each word,
  // if the word is currently in the object uniqueWordsAsKeys, set its value to false
  //otherwise add it to the object and give it value of 'true'
  var key = normalizedWords[i];
  // console.log('key is ' + key);
  if (uniqueWordsAsKeys[key] === undefined) {
    uniqueWordsAsKeys[key] = true;
  } else {
    uniqueWordsAsKeys[key] = false;
  }

}

//get the keys
for (var word in uniqueWordsAsKeys) {
  uniqueWords.push(word);
}

//console.log('uniqueWords is ' + uniqueWords);

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
var j = 0;
for (var i = 0; i < uniqueWords.length; i++) {
  if (uniqueWords[i].length > j) {
    j = uniqueWords[i].length;
    longAndShort['longest'] = uniqueWords[i];
  }
}

var k = 5;
for (var i = 0; i < uniqueWords.length; i++) {
  if (uniqueWords[i].length < k) {
    k = uniqueWords[i].length;
    longAndShort['shortest'] = uniqueWords[i];
  }
}

console.log('longest word is ' + longAndShort['longest']);
console.log('shortest word is ' + longAndShort['shortest']);
/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
