document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const apiKey = 'b5c0579f032a4cba1eb9a8878aa93261'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const location = data.name;

            document.getElementById('weatherResult').innerHTML = `
                <h2>${location}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>City not found.</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherResult').innerHTML = `<p>Unable to fetch weather data.</p>`;
    }
});
