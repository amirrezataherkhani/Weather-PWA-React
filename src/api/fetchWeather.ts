import axios from "axios";
import FetchWeatherProps from "../types/fetchWeather.types";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c3715d916210823fffd4a7329e393832";
export const fetchWeather: FetchWeatherProps = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            appid: API_KEY,
        },
    });

    return data;
};
