import { WeatherIcon } from "./constants";

export interface Weather {
  windSpeed: number;
  icon: WeatherIcon;
  airTemperature: number;
  humidity: number;
}

export interface StockPrice {
  name: string;
  price: number;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SaunaData {
  id: number;
  humidity: number;
  temperature: number;
  created_at: string;
}

export interface SaunaResponseBody {
  data: SaunaData[];
  error: boolean;
}
