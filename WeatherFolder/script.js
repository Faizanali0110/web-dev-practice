document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '';  //Add you own api key 
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('City not found!');
            } else {
                const cityName = data.location.name;
                const temperature = data.current.temp_c;
                const weather = data.current.condition.text;
                const iconUrl = `https:${data.current.condition.icon}`;

                document.getElementById('cityName').innerText = cityName;
                document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
                document.getElementById('weather').innerText = `Weather: ${weather}`;
                document.getElementById('weatherIcon').src = iconUrl;
                document.getElementById('weatherIcon').style.display = 'block';
                
                // Change ba and add emoji based on weather condition
               
                let weatherEmoji;
                if (weather.toLowerCase().includes('rain')) 
                    {
                    weatherEmoji = '🌧️';
                   
                } 
                else if (weather.toLowerCase().includes('cloud')) {
                    weatherEmoji = '☁️';
                    backgroundImage = 'url(cloudy.jpg)';

                } 
                else if (weather.toLowerCase().includes('sun') || weather.toLowerCase().includes('clear'))
                     {
                    weatherEmoji = '☀️';
                  
                } 
                else
                 {
                    weatherEmoji = '';
                 
                }

                document.getElementById('weather').innerText = `Weather: ${weather} ${weatherEmoji}`;
                document.body.style.backgroundImage = backgroundImage;
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundPosition = "center";
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Failed to fetch the weather data.');
            
        });
});

/*

hello 

*/
