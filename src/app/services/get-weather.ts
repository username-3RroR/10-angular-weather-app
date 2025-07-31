import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather-data';

@Injectable({
  providedIn: 'root',
})
export class GetWeather {
  constructor() {}

  async DataMeteo(varLat: string, varLon: string): Promise<WeatherData | null> {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${varLat}&longitude=${varLon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min`
      );

      if (!response.ok) {
        console.log('Error HTTP', response.status);
        return null;
      }

      const data: WeatherData = await response.json();
      return data;
    } catch (ex) {
      console.log('Error', ex);
    }

    return null;
  }
}
