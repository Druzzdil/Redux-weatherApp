const API_KEY = '414bb8f85bac12178fc947a06e35ef81';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = FETCH_WEATHER;


export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get('url');
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}