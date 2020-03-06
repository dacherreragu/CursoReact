import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN
} from './../../constants/weathers';

const location = "Bogotá,co";
const api_key = "de8f4d7000eeb39d098f31d719ad500d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;

const data = {
    humidity : 0,
    temperature: 0,
    weatherState: '',
    wind: 0
};

class WeatherLocation extends Component {

    constructor() {
        super(); // Constructor del componente base
        
        this.state = {
            city: 'Bratizlava',
            data: data
        }
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const{ speed } = weather_data.wind;
        const weatherState = SUN;

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: speed
        };

        const city = weather_data.name;

        return [data, city];
    };

    updateData = () => {
        fetch(api_weather)
        .then(resolve => {
            return resolve.json();
        }).then(data => {
            const newData = this.getData(data);
            this.setState({
                data: newData[0],
                city: newData[1]
        })}).catch();
    }

    render() {
        const { city, data } = this.state;

        return (
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data ={data}/>

                <button onClick={this.updateData}>Actualizar</button>
            </div>
        )
    }
};

export default WeatherLocation;