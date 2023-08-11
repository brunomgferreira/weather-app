const weather = (() => {
    function convertData(data) {
        const {
            current : { 
                condition: { text: weatherCondition }, 
                feelslike_c: feelsLike,
                humidity: humidity,
                temp_c: temperature, 
                wind_kph: windSpeed},
            location: { 
                name: cityName, 
                country: country}
        } = data
        return { weatherCondition, feelsLike, humidity, temperature, windSpeed, cityName, country};
    }

    async function getData(city) {
        const endpoint = `http://api.weatherapi.com/v1/current.json?key=89d8b407931746c09d0182200231108&q=${city}`;
        try {
            const response = await fetch(endpoint, { mode: "cors" });
            if(!response.ok) throw new Error(`City ${city} not found`);
            const data = convertData(await response.json());
            return data;
        } catch(error) {
            alert(error);
            return null;
        }
    }

    return { getData };
})();

export default weather;