import { WeatherIcon } from "./constants";

export interface Weather {
  windSpeed: number;
  icon: WeatherIcon;
  airTemperature: number;
  humidity: number;
}

export interface ChartData {
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  openPrice: number;
  averagePrice: number;
}
