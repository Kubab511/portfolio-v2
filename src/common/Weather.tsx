import { useLocation } from "react-router";
import useWeather from "../hooks/useWeather";
import { ClipLoader } from "react-spinners";

export function Weather() {
  const lang = useLocation().pathname === "/pl" ? "pl" : "en";

  const forecast = useWeather(53.35, -6.27, lang, "metric");

  return (
    <div className="p-4 mb-4 border border-accent text-slate-400 rounded-lg">
      {forecast ? (
      <div className="flex items-center">
        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="Weather" className="w-12 h-12 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{forecast.name}</h3>
          <p className="capitalize">{forecast.weather[0].description}</p>
          <p className="text-xl">{Math.round(forecast.main.temp)}°C</p>
        </div>
      </div>
      ) : (
        <div className="flex items-center">
          <ClipLoader color="#94a3b8" speedMultiplier={0.5} />
          <p className="ml-4">{location.pathname === "/pl" ? "Ładowanie pogody..." : "Loading weather..."}</p>
        </div>
      )}
    </div>
  )
}