export class LocationData {
  name: string;
  lat: number;
  lon: number;
  constructor(data: Partial<LocationData> = {}) {
    this.name = data.name || '';
    this.lat = data.lat || 0;
    this.lon = data.lon || 0;
  }
}
