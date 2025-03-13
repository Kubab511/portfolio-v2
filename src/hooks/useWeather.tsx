import { useEffect, useState } from "react";
import { Forecast } from "../types/Forecast";

function useWeather(latitude: number, longitude: number, language: string, SIunit: string) {
  const [weather, setWeather] = useState<Forecast | null>();
  const requestUrl = "https://api.barabasz.dev/v1/getWeather"
  // const requestUrl = "http://localhost:5000/v1/getWeather"
  
  
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lat: latitude, lon: longitude, lang: language, units: SIunit })
    }
    fetch(requestUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [SIunit, language, latitude, longitude, requestUrl]);

  console.log(weather)

  return (weather);
}

export default useWeather;