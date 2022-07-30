import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import searchCity from "./services/utils/searchCity";

function App() {
    const [query, setQuery] = useState(String);
    const [searchResult, setSearchResult] = useState(Object);
    console.log(searchResult);
    return (
        <div className="bg-earth-image items-center flex flex-col min-h-screen bg-no-repeat bg-cover">
            <input
                type="text"
                name=""
                id=""
                placeholder="Search..."
                className="m-auto block p-5 rounded-full w-1/4 bg-white bg-opacity-80 placeholder-emerald-600 text-center text-emerald-700 text-xl focus-visible:outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => {
                    searchCity(e, setSearchResult, setQuery);
                }}
            />
            {searchResult.main && (
                <div className="m-auto p-5 rounded-xl w-1/5 mt-0 h-2/4 bg-white bg-opacity-80  text-center focus-visible:outline-none">
                    <h2 className="text-4xl mb-6">
                        <span>{searchResult.name}</span>
                        <sup className="bg-orange-600 mx-1 px-1 rounded-md text-white">
                            {searchResult.sys.country}
                        </sup>
                    </h2>
                    <div className="text-5xl">
                        {Math.round(searchResult.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div>
                        <img
                            alt={searchResult.weather[0].description}
                            src={`https://openweathermap.org/img/wn/${searchResult.weather[0].icon}@2x.png`}
                            className="m-auto"
                        />
                        <p>{searchResult.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
