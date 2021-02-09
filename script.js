const clickButton = document.getElementsByClassName('btn')[0];
const quoteDiv = document.querySelector('p');

async function showQuote() {
	const response = await fetch(
		'https://apiforquotes.herokuapp.com/api/quotes/random'
	);
	const data = await response.json();
	const quote = data.randomQuote[0].content;
	quoteDiv.textContent = quote;
}

clickButton.addEventListener('click', showQuote);
