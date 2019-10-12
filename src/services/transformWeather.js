import convert from 'convert-units';
import {
    SUN,
} from './../constants/weathers';

    const getTemp = kelvin =>{
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    const getWeatherState = Weather_data => {
        return SUN;
    }

    const transformWeather = Weather_data =>{
        const {humidity, temp}=Weather_data.main;
        const {speed} = Weather_data.wind;
        const weatherState = getWeatherState(Weather_data);
        const temperature = getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }


        return data;
    }

export default transformWeather;