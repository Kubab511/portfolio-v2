import { useEffect, useState } from "react";
import { Forecast } from "../types/Forecast";

export default function useWeather(lat: number, lon: number, lang: string, units: string) {
  const [weather, setWeather] = useState<Forecast | null>();
  const requestUrl = `https://api.barabasz.dev/v1/weather?lat=${lat}&lon=${lon}&lang=${lang}&${units}`
  
  
  useEffect(() => {
    fetch(requestUrl)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, [lat, lon, lang, units, requestUrl]);

  return (weather);
}