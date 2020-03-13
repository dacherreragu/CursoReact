import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../constants/weathers';

const getWeatherState = weather => {
    const { id } = weather[0];

    var iconToReturn = '';

    if(id < 300) {
        iconToReturn = THUNDER;
    } else if (id < 400) {
        iconToReturn = DRIZZLE;
    } else if (id < 600) {
        iconToReturn = RAIN;
    } else if (id < 700) {
        iconToReturn = SNOW;
    } else if (id === 800) {
        iconToReturn = SUN;
    } else {
        iconToReturn = CLOUD;
    }
    return iconToReturn;
}

const TransformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const{ speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather);

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: speed
    };

    const city = weather_data.name;

    return [data, city];
};

export default TransformWeather;