import transforForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload =>({type: SET_CITY, payload});

const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const api_key = "94c47bc54fa48611447617e6c98469bb";
const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload =>{

    return dispatch =>{
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

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