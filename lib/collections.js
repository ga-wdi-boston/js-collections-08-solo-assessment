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

normalizedWords = paragraph.split(" ");

for (var i = 0; i < normalizedWords.length; i++)
{
  normalizedWords[i] = normalizedWords[i].replace(/[^\w']+/g, "").toLowerCase();
}/* your code starts here */

console.log(normalizedWords);
/* your code ends here */

// Question 2
// write code to store the elements from the words array as keys
//   in the associative array uniqueWordsAsKeys
// then store those keys in the array uniqueWords

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

for (var i = 0; i < normalizedWords.length; i++)
{
  if (uniqueWordsAsKeys[normalizedWords[i]] === undefined)
  {
    uniqueWordsAsKeys[normalizedWords[i]] = 1;
  }
  else
  {
    uniqueWordsAsKeys[normalizedWords[i]]++;
  }
}

console.log(uniqueWordsAsKeys);
// The keys pulled out into a list
var uniqueWords = [];

for (var key in uniqueWordsAsKeys)
{
  uniqueWords.push(key);
}

console.log(uniqueWords);
/* your code starts here */

/* your code ends here */

// Question 3
// write code to determine the longest and shortest words in the
//   uniqueWords array
// use a dictionary to store the words with keys

// The longest and shortest word in the paragraph
var longAndShort = {};
var longest = '';
var shortest = paragraph;
for(var i = 0; i < uniqueWords.length; i++)
{
  if(uniqueWords[i].length > longest.length)
  {
    longest = uniqueWords[i];
  }
  if(uniqueWords[i].length < shortest.length)
  {
    shortest = uniqueWords[i];
  }
}

console.log("The longest word is : " + longest);

console.log("The shortest word is : " + shortest);
//jscs:disable requireDotNotation
longAndShort['longest'] = longest;
longAndShort['shortest'] = shortest;

/* your code starts here */

/* your code ends here */

// A part of the testing infrastructure
module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  longAndShort: longAndShort
};
