document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = document.getElementById('amount').value;

    convertCurrency(sourceCurrency, targetCurrency, amount);
});

function convertCurrency(sourceCurrency, targetCurrency, amount) {
    const apiKey = 'b6a8a794795cb2e730fb1bf7';
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[targetCurrency];
            const convertedAmount = amount * exchangeRate;
            displayResult(amount, sourceCurrency, convertedAmount, targetCurrency, exchangeRate);
        })
        .catch(error => console.log('Error fetching exchange rates:', error));
}

function displayResult(amount, sourceCurrency, convertedAmount, targetCurrency, exchangeRate) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h2>Conversion Result</h2>
        <p>${amount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}</p>
        <p>Exchange Rate: 1 ${sourceCurrency} = ${exchangeRate.toFixed(4)} ${targetCurrency}</p>
    `;
}
