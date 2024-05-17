function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = 'a43b6a242950a7c7c6e8a82307e09b48'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerText = 'Error fetching weather data. Please try again.';
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = '';

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p><img src="${iconUrl}" alt="Weather Icon"></p>
        <p><strong><font color='white' size='5'>Temperature:</font></strong> <font color='indigo' size='10'>${temperature}°C</p></font>
        <p><strong><font color='blue' size='5'>Description:</font></strong> <font color=DarkMagenta size='8'>${description}</p></font>
    `;

    weatherInfoDiv.innerHTML = weatherHTML;
}