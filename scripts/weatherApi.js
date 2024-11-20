const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/saint-petersburg?unitGroup=us&include=current&key=N4BY5V6S2YLDJGPBM6MSYY3LN&contentType=json';

function getWeather() {
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('weather-icon').style.display = 'none'

    setTimeout(() => fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherIconCode = data.days[0].icon;

            document.getElementById('weather-icon').outerHTML = `<img src="../images/icons/${weatherIconCode}.svg" id="weather-icon" alt="weather icon" class="weather-icon">`;

            document.getElementById('loader').classList.add('hidden');
            document.getElementById('weather-icon').style.display = 'flex'
        })
        .catch(error => {
            console.error('Ошибка получения данных о погоде:', error);

            document.getElementById('loader').classList.add('hidden');
        }), 0)

    ;
}

window.onload = getWeather;

document.addEventListener("click", getWeather);

