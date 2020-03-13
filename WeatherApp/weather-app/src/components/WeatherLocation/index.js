import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import TransformWeather from '../../services/TransformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props); // Constructor del componente base
        
        const { city } = props;

        this.state = {
            city,
            data: null
        }
    }

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate(prevProps, prevState) {

    }

    /* componentWillMount() { // UNSAFE
        console.log("componentWillMount");
    } */

    /* componentWillUpdate(nextProps, nextState) { // UNSAFE
        console.log("componentWillUpdate");
    } */

    updateData = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather)
        .then(resolve => {
            return resolve.json();
        }).then(data => {
            const newData = TransformWeather(data);
            this.setState({
                data: newData[0],
                city: newData[1]
        })}).catch();
    }

    render() {
        console.log("render");

        const { city, data } = this.state;

        return (
            <div className="weatherLocationCont">
                <Location city = {city}/>
                { data ? <WeatherData data = {data}/> : <CircularProgress/> }
            </div>
        )
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;