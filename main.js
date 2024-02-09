const copyQuoteBtn = document.getElementById('copyQuote');
const genQuote = document.querySelector('.genQuote');
const authorQuote = document.querySelector('.authorQuote');
const copyAlert = document.getElementById('alertCopy');
const fullQuoteAuthor = `${genQuote.textContent} - ${authorQuote.textContent}`;

function toClipboard(element) {
  navigator.clipboard.writeText(element)
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

copyQuoteBtn.addEventListener('click', () => toClipboard(fullQuoteAuthor));