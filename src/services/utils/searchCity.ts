import { fetchWeather } from "../../api/fetchWeather";
import SearchProps from "../../types/searchCity.types";

const searchCity: SearchProps = async (e, dataSetter, querySetter) => {
    if (e.key === "Enter") {
        const data = await fetchWeather(e.target.value);
        dataSetter(data);
        querySetter("");
    }
};
export default searchCity;
