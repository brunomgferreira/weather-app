const view = (() => {
    function setSearchResult(weatherData) {
        if (!weatherData) return;
        const condition = document.getElementsByClassName('condition')[0];
        const location  = document.getElementsByClassName('location')[0];
        const degrees = document.getElementsByClassName('degrees')[0];
        const feelsLike = document.getElementsByClassName('feels-like')[0];
        const windKmh = document.getElementsByClassName('wind-kmh')[0];
        const humidity = document.getElementsByClassName('humidity')[0];
         
        condition.textContent = `${weatherData.weatherCondition}`;
        location.textContent = `${weatherData.cityName}, ${weatherData.country}`;
        degrees.textContent = `${Math.round(weatherData.temperature)}`;
        feelsLike.innerHTML = `Feels like: ${weatherData.feelsLike}<sup>&#176C</sup>`;
        windKmh.textContent = `Wind: ${weatherData.windSpeed} kph`;
        humidity.textContent = `Humidity: ${weatherData.humidity}`;
    }

    return { setSearchResult };
})();

export default view;