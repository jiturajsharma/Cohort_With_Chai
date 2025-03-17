const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const copyBtn = document.getElementById('copy');
const twitterBtn = document.getElementById('twitter-share');

// Fetch and display quote
async function fetchQuote() {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
        const { data } = await response.json();

        quoteText.innerText = data.content;
        authorText.innerText = data.author;
    } catch (error) {
        quoteText.innerText = "Failed to load quote";
        authorText.innerText = "";
        }
    }


// Share on Twitter
function shareOnTwitter() {
    const tweet = encodeURIComponent(quoteText.innerText + ' ' + authorText.innerText);
    window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank');
    }

    function copyToClipboard() {
        const textToCopy = `${quoteText.innerText} ${authorText.innerText}`;
        navigator.clipboard.writeText(textToCopy);
        alert("Quote copied to clipboard!");
        }


// Event listeners
newQuoteBtn.addEventListener('click', fetchQuote);
copyBtn.addEventListener('click', copyToClipboard);
twitterBtn.addEventListener('click', shareOnTwitter);

// Initial quote fetch
fetchQuote();


