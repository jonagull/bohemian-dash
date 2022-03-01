import { WeatherIcon } from "./constants";

export interface Weather {
  windSpeed: number;
  icon: WeatherIcon;
  airTemperature: number;
  humidity: number;
}
