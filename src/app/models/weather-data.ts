export class WeatherData {
  name: string;
  current: number;
  daily: number;

  constructor(data: Partial<WeatherData>) {
    this.name = data.name || '';
    this.current = data.current || 0;
    this.daily = data.daily || 0;
  }
}
