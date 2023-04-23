import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent {
  location = 'Paris';
  temperature: number | null = null;
  weatherCondition: string | null = null;
  icon:string=''

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurrentTemperature().subscribe(data => {
      this.temperature = data.currentConditions.temp;
    });

    this.weatherService.getCurrentWeather().subscribe(data => {
      this.icon = data.currentConditions.icon;
      this.weatherCondition = this.getWeatherCondition(this.icon);

    });
  }

  getWeatherCondition(icon: string): string {
    switch (icon) {
      case 'clear-day':
        return '☀️';
      case 'clear-night':
        return '🌌';
      case 'partly-cloudy-day':
        return '🌤️';
      case 'partly-cloudy-night':
        return '🌤️';
      case 'cloudy':
        return '☁️';
      case 'rain':
        return '☔️';
      case 'sleet':
        return '🌨️';
      case 'snow':
        return '❄️';
      default:
        return '﹖';
    }
  }

}
