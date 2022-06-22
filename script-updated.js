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

const quotes = [
  {quote: "Be yourself; everyone else is already taken.", 
   tags: "Life advice",
   source: "Oscar Wilde",
   year: 1890}, 
  {quote: "You know you're in love when you can't fall asleep because reality is better than your dreams.",
   tags: "Meaningful quotes",
   source: "Dr. Seuss"}, 
  {quote: "In three words I can sum up everything I've learned about life: it goes on.",
   source: "Robert Frost",
   year: 1954},
  {quote: "If you tell the truth, you don't have to remember anything.",
   tags: "Life advice",
   source: "Mark Twain"},
  {quote: "Without music, life would be a mistake.",
   source: "Friedrich Nietzsche",
   year: 1889,
   citation: "How to philosophize with a hammer"}
];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

/***
 * `getRandomQuote` function
 * I made a randVal variable with a random value from 0 to 1 (not inclusive) and multiplied it for the number of quotes I had and then
 * used the floor function to round to the lower whole number. I then returned the specific quote object using the random index.
***/

function getRandomQuote() {
  const randVal = (Math.floor(Math.random() * 5));
  return quotes[randVal];
}

/***
 * `printQuote` function
 * I called the getRandomQuote and used the iff statements to check if the extra perameters were undefined as to whether to add it to 
 * the html string or not. For the extra credit, I created an array of colors from ROYGBIV and used the same process as I did for the
 * random index to pick a random color from the array and then changed the background color with each call of the print quote method.
***/

function printQuote() {
  const randQuote = getRandomQuote();
  let finalQuote = `<p class="quote">${randQuote.quote}</p>
                      <p class="source">${randQuote.source}`
  if(randQuote.citation != undefined) {
    finalQuote += `<span class="citation">${randQuote.citation}</span>`;
  }

  if(randQuote.year != undefined) {
    finalQuote += `<span class="year">${randQuote.year}</span>`;
  }

  if(randQuote.tags != undefined) {
    finalQuote += `<span class="year">${randQuote.tags}</span>`;
  }

  finalQuote += "</p>";

  const randVal = (Math.floor(Math.random() * 7));

  document.body.style.backgroundColor = colors[randVal];

  document.getElementById('quote-box').innerHTML = finalQuote; 
}

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 * right above this I just used the provided function and called the printquote method for every ten thousand milliseconds (ten seconds).
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
