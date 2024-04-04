document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

function getWeather(city) {
    const apiKey = 'c412bf1a39944ad8bcd163918240404'; 
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayCurrentConditions(data.current);
            displayFiveDayForecast(data.forecast.forecastday);
        })
        .catch(error => console.log('Error fetching weather data:', error));
}

function displayCurrentConditions(currentConditions) {
    const currentConditionsDiv = document.getElementById('currentConditions');
    currentConditionsDiv.innerHTML = `
        <h2>Current Conditions</h2>
        <p>Temperature: ${currentConditions.temp_c}°C</p>
        <p>Condition: ${currentConditions.condition.text}</p>
        <p>Humidity: ${currentConditions.humidity}%</p>
        <img src="${currentConditions.condition.icon}" alt="Weather icon">
    `;
}

function displayFiveDayForecast(fiveDayForecast) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = `<h2>5-Day Forecast</h2>`;
    
    fiveDayForecast.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <p>${day.date}</p>
            <p>Max Temp: ${day.day.maxtemp_c}°C</p>
            <p>Min Temp: ${day.day.mintemp_c}°C</p>
            <img src="${day.day.condition.icon}" alt="Weather icon">
        `;
        forecastDiv.appendChild(forecastItem);
    });
}
