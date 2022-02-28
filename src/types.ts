import { isPropertySignature } from "typescript";
import { WeatherIcon } from "./constants";

export interface Weather {
  windSpeed: number;
  icon: WeatherIcon;
  airTempature: number;
  humidity: number;
}
