/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  {quote:'There is a special place in hell for women who don\'t help other women.',
   source: 'Madeline Albright',
   tag: 'feminism'},
  {quote: 'Men should think twice before making widowhood women\'s only path to power.',
   source: 'Gloria Steinem',
   tag: 'feminism'},
  {quote: 'I am not free while any woman is unfree\, even when her shackles are very different from my own.',
   source: 'Audre Lorde',
   tag: 'feminism'},
  {quote: 'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom\.',
   source: 'Isaac Asimov',
   tag: 'science'},
  {quote: 'Science flies you to the moon/.  Religion flies you into buildings.',
   source: 'Victor Stenger',
   tag: 'science'},
  {quote:  'He who is not satisfied with a little is satisfied with nothing.',
   source: 'Epicurus',
   tag: 'equality'},
  {quote:  'The authority of thousands is not worth the humble reasoning of a single individual.',
   source: 'Galileo Galilei',
   tag: 'science'},
  {quote: 'Don\'t gain the world and lose your soul\; wisdom is better than silver or gold.',
   source: 'Bob Marley',
   tag: 'equality'},
  {quote: 'This world would be a whole lot better if we just made an effort to be less horrible to one another.',
   source: 'Ellen Page',
   tag: 'equality'},
  {quote: 'Poverty is the worst form of violence.',
   source: 'Mahatma Ghandi',
   tag: 'equality'},
  {quote: 'Verily I say unto you\, that a rich man shall hardly enter into the kingdom of heaven.',
   source: 'Jesus Christ',
   citation: 'King James Bible',
   tag: 'equality'},
  {quote: 'I have a dream that one day on the red hills of Georgia sons of former slaves and the sons of former slave-owners will be able to sit down together at the table of brotherhood.',
   source: 'Martin Luther King, Jr',
   citation: 'I Have a Dream Speech',
   year: '1963',
   tag: 'equality'}
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/

// this is where I have the computer choose a quote at random

function getRandomQuote(){
  var quoteNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[quoteNumber];
  return randomQuote;
  console.log(randomQuote.quote);
}
//added for extra credit to change background color.  Used in the printQuote function.

function randColor(){ 
  var number = Math.floor(Math.random() * 256);
  return number;
}


/***
 * `printQuote` function.  This will print the random quote along with its properties to the page
***/

function printQuote(){
  var printThis = getRandomQuote();
  var entireString = '';
  entireString = '<p class = "quote">' + printThis.quote + '</p>' + '<p class = "source">' + printThis.source;
  if (printThis.citation){
    entireString = entireString + '<span class = "citation">' + printThis.citation + '</span>';
  }
  if (printThis.year){
    entireString = entireString + '<span class = "year">' + printThis.year + '</span>';
  }
  entireString = entireString + '<span class = "tag">' + ', ' +printThis.tag + '</span></p>';
  console.log(entireString);
  var red = randColor();
  var blue = randColor();
  var green = randColor();

  var color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  
  document.getElementById('quote-box').innerHTML = entireString;
  document.body.style.backgroundColor = color;
}


//I am now running the function and limiting the wait time to 30 seconds

setInterval(printQuote,30000);










/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);