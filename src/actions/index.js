import transforForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload =>({type: SET_CITY, payload});

const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload =>({type: GET_WEATHER_CITY,payload});
const setWeatherCity = payload =>({type: SET_WEATHER_CITY,payload});

const api_key = "94c47bc54fa48611447617e6c98469bb";
const url = "https://api.openweathermap.org/data/2.5/forecast";
const url_weather = "https://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload =>{

    return (dispatch, getState) =>{
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        
        const now = new Date();

        if(date && (now -date)< 1*60*1000){
            return;
        }

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weahter_data =>{
                const forecastData = transforForecast(weahter_data);
                console.log(forecastData);
                
                //modificar el estado con el resultado de la propmise
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
        return; 
    };
};

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather).then(data => {
                return data.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);
                
                dispatch(setWeatherCity({city, weather}));
            });
            
        });

    }
    /*
    const api_key = "94c47bc54fa48611447617e6c98469bb";
    const url = "https://api.openweathermap.org/data/2.5/weather";

    componentWillMount(){
        const {city} = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data});
        });
    }
    */
};