const copyQuoteBtn = document.getElementById('copyQuote');
const newQuoteBtn = document.getElementById('newQuote');
const genQuote = document.querySelector('.genQuote');
const authorQuote = document.querySelector('.authorQuote');
const copyAlert = document.getElementById('alertCopy');

const API_KEY = 'TcUeQDdUJ2zbSjk2WGceVw==f1oa4hpKBoJSzvpf';
const API_URL = `https://api.api-ninjas.com/v1/quotes?X-Api-Key=${API_KEY}`;

fetch(API_URL)
  .then((response) => response.json())

  .then((data) => {
    genQuote.textContent = `"${data[0].quote}"`;
    authorQuote.textContent = data[0].author;
  });

function toClipboard(element) {
  navigator.clipboard
    .writeText(element)
    .then(() => {
      copyAlert.textContent = 'Copied!';
      copyAlert.classList.remove('hidden');
      copyAlert.classList.add('show-alert');
    })
    .catch(() => {
      copyAlert.textContent = 'Bad request!';
      copyAlert.classList.remove('hidden');
      copyAlert.classList.add('error-alert');
    })
    .finally(() => {
      setTimeout(() => {
        copyAlert.classList.remove('show-alert');
        copyAlert.classList.add('hidden');
      }, 2000);
    });
}

copyQuoteBtn.addEventListener('click', () => {
  toClipboard(`${genQuote.textContent} - ${authorQuote.textContent}`);
});
newQuoteBtn.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});
