import { Injectable } from '@angular/core';
import { LocationData } from '../models/location-data';

@Injectable({
  providedIn: 'root',
})
export class SearchLocation {
  constructor() {}

  async getLocation(location: string): Promise<LocationData[]> {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`
      );

      if (!response.ok) {
        console.log('Error HTTP', response.status);
        return [];
      }
      const data: LocationData[] = await response.json();
      return data;
    } catch (ex) {
      console.log('Error', ex);
    }

    return [];
  }
}
