function showweatherDetails(event) {
    event.preventDefault();
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = 'c47ae839e4966948c5bd2892c4aa2871'; // Replace 'YOUR_API_KEY' with your actual API key
    // Corrected apiUrl using template literals
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`; // Added units=metric for Celsius

    fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              // Throw an error if the response is not OK (e.g., 404, 401)
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          // Check if data contains necessary properties before accessing them
          if (data && data.main && data.weather && data.weather.length > 0) {
              weatherInfo.innerHTML = `<h2>Weather for ${data.name || 'Unknown Location'}</h2>
                                       <p>Temperature: ${data.main.temp} &#8451;</p>
                                       <p>Weather: ${data.weather[0].description}</p>`;
          } else {
              weatherInfo.innerHTML = `<p>Could not retrieve weather data for the specified coordinates. Please check the latitude and longitude.</p>`;
          }
      })
      .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again. Error: ${error.message}</p>`;
      });
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);