const quoteContainer = document.getElementById("quote-container");
const quoteId = document.getElementById("quote");
const authorName = document.getElementById("author");
const twitterId = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

async function newQuotes() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  quoteId.textContent = quote.text;

  if (!quote.author) {
    authorName.textContent = "Unknown";
  } else {
    authorName.textContent = quote.author;
  }

  if (quote.text.length > 120) {
    quoteId.classList.add("long-quote");
  } else {
    quoteId.classList.remove("long-quote");
  }
}

async function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteId.textContent} - ${authorName.textContent}`;
window.open(twitterURL,'-blank');
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
  } catch (err) {}
}
newQuoteBtn.addEventListener("click", getQuotes);

twitterId.addEventListener("click", tweetQuote)