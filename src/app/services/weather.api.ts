import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherApi {
  apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  // latitude and longitude come from geolocation of the client
  // as well as start_date and end_date (it's the current date, but the api needs both for a daily output)

  searchWeatherByLocation(
    latitude: number,
    longitude: number,
    start_date: string,
    end_date: string
  ): Observable<any> {
    const headers = new HttpHeaders().set('API-Url', this.apiUrl);

    const options = { headers };

    return this.http.get(
      `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&start_date=${start_date}&end_date=${end_date}&timezone=auto&daily=temperature_2m_mean&daily=precipitation_probability_mean&daily=uv_index_max&daily=sunrise&daily=sunset&hourly=relative_humidity_2m`,
      options
    );
  }
}

// example of an api request
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&start_date=2025-07-30&end_date=2025-07-30&timezone=auto&daily=temperature_2m_mean&daily=precipitation_probability_mean&daily=uv_index_max&daily=sunrise&daily=sunset&hourly=relative_humidity_2m&hourly=weather_code
