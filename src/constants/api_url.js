
const api_key = "94c47bc54fa48611447617e6c98469bb";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
const location = "Tegucigalpa,hn";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;